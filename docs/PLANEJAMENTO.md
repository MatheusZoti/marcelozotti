# Planejamento do ambiente: landing page das mentorias

> Status: **aguardando aprovação**. Nenhum código do site foi escrito ainda.
> Fontes lidas: `CLAUDE.md`, `Brand-Book-Marcelo-Zotti.pdf` (33 p.), os dois pitches (`.pptx`), as 5 referências visuais e as 9 fotos originais.

---

## 1. Tecnologia

| Decisão | Escolha | Por quê |
|---|---|---|
| Framework | **Astro 7** (saída 100% estática) | Gera HTML puro: a página funciona sem JavaScript (regra do projeto). Cada seção vira um componente isolado, fácil de reordenar quando o cliente aprovar o mapa. |
| Imagens | `astro:assets` + **sharp** | Gera AVIF/WebP em vários tamanhos (`srcset`), lazy load e dimensões fixas automaticamente. Garante o teto de ~300 KB por imagem. |
| CSS | CSS puro com variáveis (tokens da marca) | Os efeitos de luz e vidro são sob medida; Tailwind não ajudaria e deixaria o visual com cara de template. |
| Fontes | **Manrope** e **JetBrains Mono** auto-hospedadas (`@fontsource-variable`) | Sem requisição ao Google Fonts no primeiro carregamento; `font-display: swap`; só os pesos usados (400/500/700/800). |
| JavaScript | TypeScript mínimo, sem framework de UI | Só para: rastrear cliques (`dataLayer`), montar a mensagem do qualificador, carregar vídeo no play e mostrar o botão flutuante. Tudo com fallback sem JS. |
| FAQ | `<details>/<summary>` nativo | Abre e fecha sem JavaScript, acessível por padrão. |
| Vídeos | Fachada (miniatura + botão) que só carrega o player no clique | Zero peso de vídeo no carregamento inicial. |
| Medição | Google Tag Manager (ID pendente) | `dataLayer.push({event:'whatsapp_click', cta:'<origem>'})` em todo CTA. |
| Hospedagem | **Vercel** (recomendado), deploy a cada push no GitHub | Gratuito para esse porte, HTTPS e CDN. Alternativas: Netlify ou GitHub Pages. |

Requisitos atendidos pela própria arquitetura: mobile first, `prefers-reduced-motion` (animações de luz desligadas, conteúdo intacto), conteúdo visível sem JS, SEO e Open Graph no layout base.

---

## 2. Estrutura de arquivos

```
marcelozotti/
├─ CLAUDE.md                     regras do projeto
├─ docs/PLANEJAMENTO.md          este documento
├─ logos/                        logos oficiais (fonte única, importados direto daqui)
├─ scripts/
│  └─ otimizar-fotos.mjs         gera as versões web a partir de "Fotos do profissional/"
├─ public/                       favicon, imagem Open Graph, robots.txt
├─ src/
│  ├─ config/site.ts             WHATSAPP (UMA constante), mensagens por origem, ID do GTM, URL do site
│  ├─ conteudo/                  textos estruturados: frentes.ts, faq.ts, formatos.ts, depoimentos.ts
│  ├─ assets/fotos/              recortes web das fotos (gerados pelo script, ~2400 px)
│  ├─ styles/
│  │  ├─ tokens.css              cores, tipografia, espaçamentos, ângulos 45° / 67,5°
│  │  ├─ base.css                reset, tipografia, layout
│  │  └─ luz.css                 feixe, colunas de luz, brilho de borda, vidro fosco
│  ├─ components/
│  │  ├─ ui/                     BotaoWhatsApp, PlacaVidro, Numero, Rotulo, VideoFachada, Feixe
│  │  └─ secoes/                 01-Hero.astro … 14-Rodape.astro (uma por seção do mapa)
│  ├─ scripts/                   whatsapp.ts (links + dataLayer + qualificador), video.ts
│  ├─ layouts/Base.astro         <head>: SEO, Open Graph, GTM, fontes
│  └─ pages/index.astro          monta as seções na ordem aprovada
└─ (local, fora do Git) referencias/, Fotos do profissional/, site/, videos/
```

### O que vai (e o que não vai) para o GitHub
O repositório `MatheusZoti/marcelozotti` é **público**. Por isso ficam só no computador (via `.gitignore`):

- `referencias/marca/`: os pitches têm os **preços** (que nunca podem aparecer) e o brand book traz o número de faturamento ainda não documentado.
- `referencias/visual/`: imagens de terceiros (Dribbble etc.), uso só como inspiração.
- `Fotos do profissional/`: originais de 10–19 MB (144 MB no total) e fotos com o parceiro sem autorização confirmada. No Git entram só as versões web, quando forem usadas.
- `site/`: versão antiga descartada.
- `selo-garantia-7-dias.png`: ver pendências.

Se quiser versionar tudo isso, a saída é tornar o repositório privado.

---

## 3. Sistema visual (tokens)

- **Cores** (só a paleta): Navy `#0B1F3B` como base, com um "navy profundo" derivado dele (ex.: `#06111F`) para o fundo quase preto das referências; Azul `#2563EB` para luz e destaques; Laranja `#F59E0B` **somente** no botão do WhatsApp; Off-white `#F4F7FB` para texto; Grafite `#1F2937` para superfícies de vidro apagadas.
- **Contraste** (WCAG AA, do brand book): off-white sobre navy 15,4:1; navy sobre laranja 7,7:1 (texto do botão é navy, nunca branco).
- **Tipografia**: Manrope 800 nos títulos, 400/500 no texto; JetBrains Mono em números, etapas (`01`–`07`), rótulos e microcopy técnica.
- **Ângulos**: feixes e colunas de luz inclinados a **67,5°**; cortes entre seções e molduras a **45°** (a diagonal da fita). Nada de luz vertical "padrão SaaS".
- **Logo**: assinatura completa só com ≥ 280 px de largura (regra do brand book). No cabeçalho do celular (390 px) entra só o **símbolo MZ**; a assinatura completa aparece no hero em telas largas e no rodapé. Sem sombra ou brilho sobre o logo.
- **Vidro fosco**: `backdrop-filter` só em até 3–4 placas visíveis por vez; no celular, placas usam gradiente sólido (sem blur) para não pesar.

---

## 4. Como cada referência entra em cada seção

| Ref. | O que aproveitar | Adaptação para a marca |
|---|---|---|
| **ref-01** feixe central + cards | Peça central iluminada com placas orbitando; feixe de luz vindo do escuro | Feixe azul inclinado a 67,5°; foto do Marcelo na placa central; placas laterais com dados reais do formato |
| **ref-02** parede de números | Grade de placas com número grande + rótulo pequeno; última fileira apagada em perspectiva | Trocar o roxo por navy/azul; só números reais; fileira apagada = ritmo, não dado novo |
| **ref-03** data drop | Título gigante, barras em gradiente, nota de conclusão com barra lateral | Gradiente navy → azul → off-white (sem o rosa); usado como "a conta que quase ninguém faz" |
| **ref-04** colunas de luz | Colunas verticais de luz atrás do CTA, rodapé limpo no mesmo fundo | Colunas a 67,5°; botão laranja como única faísca quente |
| **ref-05** placas de vidro | Placas com luz interna, algumas acesas e outras apagadas; rótulo mono girado | Base das 7 frentes e do método: a placa "acende" conforme o usuário rola |

### Seção por seção (com intensidade de luz para dar ritmo)

| # | Seção | Referência | Foto | Luz |
|---|---|---|---|---|
| 1 | **Hero**: "Você já tem os produtos. Agora é hora de vender mais." | ref-01: Marcelo na placa central sob o feixe; ao redor, placas com `4 encontros`, `2h`, `8h ao vivo`, `ML + Shopee`; CTA laranja | *Foto principal pois mostra a ambientação* (galpão, gesto explicando) | ●●●●● máxima |
| 2 | Prova imediata: 2–3 cortes de depoimento | ref-01 (cards 9:16 em vidro) | miniaturas dos vídeos (pendente) | ●●●○○ |
| 3 | Identificação: "Você se reconhece?" | só tipografia; cada dor numa placa apagada (ref-05) | nenhuma | ●○○○○ quase escuro |
| 4 | A causa real: falta de método | **ref-03**: barras mostrando preço → taxas → frete → custo → margem, marcadas como **exemplo ilustrativo** | *Foto da operação* (P&B) como textura ao fundo, bem escura | ●●○○○ |
| 5 | Quem é o Marcelo | **ref-02**: parede de números (`6+ anos`, `Brazotti`, `ML + Shopee`, faturamento só se confirmado) | *VISITA_BRAZOTTI-122* (escritório com o logo Brazotti) | ●●●●○ |
| 6 | O método: Entender → Decidir → Aplicar | **ref-05**: 3 placas que acendem em sequência ao rolar | nenhuma | ●●●○○ |
| 7 | As 7 frentes | **ref-05**: grade de placas com `01`–`07` em mono, uma acesa por vez | nenhuma | ●●●○○ |
| 8 | Para quem é / não é + pré-requisito | duas colunas, corte de 45° entre elas | nenhuma | ●○○○○ |
| 9 | Depoimentos completos | ref-01 (vídeo central iluminado, os outros em órbita) | miniaturas (pendente) | ●●●○○ |
| 10 | Formatos: Online x Presencial | duas placas grandes de vidro (ref-05) com os dados em mono (ref-02); "Presencial: só Curitiba e região" visível | Online: *VISITA_BRAZOTTI-31*; Presencial: *VISITA_BRAZOTTI-122* (recorte diferente do usado na seção 5) ou *foto principal da operação* | ●●●●○ |
| 11 | Como funciona depois do clique | 3 passos `01 02 03` em mono, linha diagonal de 45° ligando | nenhuma | ●●○○○ |
| 12 | FAQ de objeções | lista simples (`<details>`) | nenhuma | ●○○○○ mínima |
| 13 | CTA final com qualificador | **ref-04**: colunas de luz a 67,5° atrás do formulário; botão monta a mensagem | opcional: *VISITA_BRAZOTTI-31* | ●●●●● máxima |
| 14 | Rodapé | ref-04 (parte de baixo) | nenhuma | ●○○○○ |

**Extras**: botão flutuante de WhatsApp só no celular (aparece depois do hero e some sobre o CTA final); CTA a cada 2–3 seções (após 3, 5, 7, 10 e 13).

### Fotos reservadas
*Marcelo e um parceiro*, *VISITA_BRAZOTTI-109*, *-117* e *foto entrevista no galpão* têm o parceiro em cena: **não entram até haver autorização**. Se liberadas, servem para "bastidores" na seção 5.

---

## 5. WhatsApp e rastreamento

- Número em **uma constante** em `src/config/site.ts`: `554199626962` (8 dígitos após o DDD; aguardando confirmação do 9º dígito).
- Cada CTA tem uma origem e uma mensagem pré-preenchida própria, por exemplo:
  - `hero` → "Olá, Marcelo! Vim pela página e quero saber mais sobre a mentoria."
  - `formato-online` / `formato-presencial` → menciona a modalidade.
  - `qualificador` → monta a mensagem com as respostas (modelo de negócio, marketplace, modalidade).
- Sem JavaScript, todo link continua funcionando com a mensagem padrão daquela origem.

---

## 6. Pendências que afetam o desenvolvimento

1. **Número do WhatsApp** (9º dígito).
2. **ID do Google Tag Manager.**
3. **Vídeos de depoimento**: quantidade, duração, quem fala, resultado citado e onde hospedar (YouTube não listado?). Até lá, seções 2 e 9 ficam fora do ar (não usamos depoimento falso nem placeholder visível).
4. **Selo "garantia 7 dias"** (`selo-garantia-7-dias.png` na raiz): não está no `CLAUDE.md` nem nos pitches. Existe essa garantia? Se sim, quais as condições?
5. **R$ 400 mil de faturamento mensal**: documentação para publicar (só como faturamento, com nota de que não é promessa).
6. **Vagas limitadas por mês**: só usar se for real.
7. **Calculadora de margem**: manter ou não (encaixaria na seção 4, sobre o gráfico da ref-03).
8. **Autorização das fotos com o parceiro.**
9. **Domínio** e hospedagem (Vercel recomendado).

---

## 7. Próximo passo após a aprovação

1. Criar o projeto Astro, tokens e componentes base (`BotaoWhatsApp`, `PlacaVidro`, `Feixe`).
2. Rodar `scripts/otimizar-fotos.mjs` para gerar as versões web.
3. Construir o hero e validar o visual em 390 / 768 / 1440 px antes de seguir para as outras seções.
