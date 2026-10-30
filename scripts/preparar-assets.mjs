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
];

const logos = [
  'simbolo/simbolo-transparente-p-fundo-escuro.svg',
  'logo/logo-transparente-p-fundo-escuro.svg',
];

await mkdir(saidaFotos, { recursive: true });
await mkdir(saidaLogos, { recursive: true });

for (const foto of fotos) {
  const destino = path.join(saidaFotos, foto.destino);
  await sharp(path.join(pastaFotos, foto.origem))
    .rotate()
    .extract(foto.recorte)
    .resize({ width: foto.largura })
    .jpeg({ quality: 84, mozjpeg: true })
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
