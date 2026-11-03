// Gera as versões web das fotos e dos logos usados no site.
// Os originais (fotos de 10–19 MB e SVGs com metadados) nunca são alterados nem publicados.
// Uso: npm run assets
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const raiz = path.resolve(import.meta.dirname, '..');
const pastaFotos = path.join(raiz, 'Fotos do profissional');
const saidaFotos = path.join(raiz, 'src/assets/fotos');
const saidaLogos = path.join(raiz, 'src/assets/logos');

// Recortes em pixels da foto já orientada (EXIF). `largura` é a largura final da fonte;
// o Astro gera AVIF/WebP nos tamanhos de tela a partir dela.
const fotos = [
  {
    origem: 'Foto principal pois mostra a ambientacao.jpg',
    destino: 'hero-marcelo-galpao.jpg',
    recorte: { left: 691, top: 979, width: 2880, height: 3600 }, // 4:5, rosto no terço superior, mãos inteiras
    largura: 1200,
  },
  {
    origem: 'VISITA_BRAZOTTI-122.jpg',
    destino: 'marcelo-escritorio-brazotti.jpg', // seção 5: à mesa, com o logo da Brazotti ao fundo
    recorte: { left: 1210, top: 0, width: 4234, height: 3387 }, // 5:4
    largura: 1400,
  },
  {
    origem: 'foto principal da operacao.jpg',
    // bento da seção 5: só o estoque, sem pessoas (parceiro sem autorização) e sem marca de
    // fornecedor legível (brand book: preservar fornecedores)
    destino: 'estoque-brazotti.jpg',
    recorte: { left: 806, top: 806, width: 3360, height: 1680 }, // 2:1
    largura: 1200,
    qualidade: 78,
  },
  {
    origem: 'Foto principal pois mostra a ambientacao.jpg',
    destino: 'marcelo-rosto.jpg', // avatar do bloco "1:1" do bento (seção 5)
    recorte: { left: 1411, top: 1267, width: 1008, height: 1008 }, // 1:1, rosto inteiro
    largura: 240,
  },
  {
    origem: 'Foto da operacao.jpg',
    destino: 'operacao-pb.jpg', // textura de fundo da seção 4 (já é P&B), aparece a 16% de opacidade
    largura: 1280,
    qualidade: 65,
    desfoque: 1.2, // leve: some no escuro e comprime muito melhor
  },
];

const logos = [
  'simbolo/simbolo-transparente-p-fundo-escuro.svg',
  'logo/logo-transparente-p-fundo-escuro.svg',
];

await mkdir(saidaFotos, { recursive: true });
await mkdir(saidaLogos, { recursive: true });

for (const foto of fotos) {
  const destino = path.join(saidaFotos, foto.destino);
  let imagem = sharp(path.join(pastaFotos, foto.origem)).rotate();
  if (foto.recorte) imagem = imagem.extract(foto.recorte);
  imagem = imagem.resize({ width: foto.largura });
  if (foto.desfoque) imagem = imagem.blur(foto.desfoque);
  await imagem
    .jpeg({ quality: foto.qualidade ?? 84, mozjpeg: true })
    .toFile(destino);
  console.log('foto ', foto.destino);
}

// Remove só o bloco <metadata> (manifesto C2PA); o desenho do logo fica idêntico.
for (const logo of logos) {
  const svg = await readFile(path.join(raiz, 'logos/svg', logo), 'utf8');
  const limpo = svg
    .replace(/<metadata>[\s\S]*?<\/metadata>/, '')
    .replace(/\s+xmlns:c2pa="[^"]*"/, '');
  await writeFile(path.join(saidaLogos, path.basename(logo)), limpo);
  console.log('logo ', path.basename(logo));
}
