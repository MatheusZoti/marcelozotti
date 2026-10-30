# Projeto: Landing page das mentorias de Marcelo Zotti

Landing page focada em conversão para as mentorias individuais de marketplaces do Marcelo Zotti (cliente da Ilimita). Toda a venda acontece no WhatsApp do Marcelo: a página não vende, ela qualifica e leva para a conversa.

> A pasta `site/` contém uma versão antiga que foi descartada. Não use como base: a estrutura e o visual estão sendo refeitos do zero.

## Arquivos de referência (leia antes de começar)
- `referencias/marca/Brand-Book-Marcelo-Zotti.pdf`: manual de marca completo (estratégia, cores, tipografia, voz, fotografia).
- `referencias/marca/MZ_Mentoria_Online.pptx` e `MZ_Mentoria_Presencial.pptx`: pitches das duas ofertas (conteúdo oficial).
- `referencias/visual/`: 5 imagens de referência de "feeling" que o cliente aprovou.
- `logos/svg` e `logos/png`: todas as variações oficiais do logo (use `*-transparente-p-fundo-escuro` em fundo escuro).
- `Fotos do profissional/`: fotos originais do Marcelo e da operação (arquivos de 10–19 MB: gerar versões web otimizadas, nunca usar os originais na página).
- `videos/` (a criar): vídeos de depoimento de alunos. Ainda não foram enviados.

## Regras de negócio
- **Nunca mostrar preço** na página. Investimento e condições são passados pelo Marcelo no WhatsApp ("Parcelamento pode ser disponibilizado" pode aparecer).
- **Todos os CTAs vão para o WhatsApp**: +55 41 9962-6962 → `https://wa.me/554199626962?text=...`
  - ATENÇÃO: celular no Brasil normalmente tem 9 dígitos após o DDD e esse número tem 8. Confirmar com o cliente; manter o número em UMA constante no código.
  - Cada botão envia uma mensagem pré-preenchida diferente (geral, online, presencial etc.) para o Marcelo saber de onde o lead veio.
  - Disparar `dataLayer.push({event:'whatsapp_click', cta:'<origem>'})` em cada clique (Google Ads / GTM).
- **Presencial é só para Curitiba e região.** Online atende todo o Brasil.
- **Nenhuma promessa de resultado ou faturamento** (regra do brand book). Não inventar depoimentos, números ou alunos.
- "R$ 400 mil de faturamento mensal na operação própria" só pode aparecer como faturamento (nunca lucro) e com nota de que não é promessa. Confirmar com o cliente antes de publicar.

## As ofertas (fonte: pitches)
- Mentoria Individual **Online** e Mentoria Individual **Presencial** (escritório do Marcelo em Curitiba-PR).
- 4 encontros · 2h por encontro · 1x por semana · 8h ao vivo · ~30 dias.
- Inclui: suporte direto pelo WhatsApp, acesso ao grupo durante a mentoria, orientação personalizada.
- Público: (1) loja física ou empresa que já tem produtos e quer começar a vender online; (2) operação digital que já vende e quer melhorar resultados. Pré-requisito: já possuir produtos.
- 7 frentes: diagnóstico da operação, estruturação das contas, análise da concorrência, precificação e margem, anúncios que convertem, logística e operação, estratégias de crescimento.
- Foco: Mercado Livre e Shopee.
- Marcelo: empresário, fundador da Brazotti Distribuidora, 6+ anos vendendo em marketplaces.

## Marca (resumo do brand book)
- Posicionamento: "Empresário que ensina. Não guru." Essência: "Fazer sonhos virarem método."
- Cores oficiais: Navy `#0B1F3B` · Azul `#2563EB` · Laranja `#F59E0B` · Off-white `#F4F7FB` · Grafite `#1F2937`. Só cores da paleta (nada de roxo).
- Laranja = ação: um único foco por composição (o botão do WhatsApp). Nunca texto branco sobre laranja.
- Tipografia: **Manrope** (títulos e textos) e **JetBrains Mono** (números, preços, etapas, rótulos técnicos). O nome "MARCELO ZOTTI" só aparece pelo arquivo do logo, nunca redigitado.
- Símbolo MZ: uma fita contínua (M = trajetória, a dobra = método, laranja = ação). Ângulos de 45° e 67,5°. Não distorcer, rotacionar, recolorir ou separar as partes.
- Voz: didática, próxima, franca, prudente. Evitar: dinheiro fácil, ostentação, "segredo", promessas.
- Fotografia: o rosto do Marcelo é o protagonista; cenas reais da operação.

## Direção visual (referências aprovadas pelo cliente)
- Fundo escuro profundo (navy quase preto), com a luz azul surgindo do escuro: feixe central, colunas de luz, brilho nas bordas.
- Placas de vidro fosco com luz interna, em grade, algumas acesas e outras apagadas.
- Números grandes como protagonistas, rótulos pequenos (sensação de painel de dados).
- Peça central iluminada (foto do Marcelo ou vídeo) com elementos orbitando.
- Pouco texto, muito ar, um CTA em destaque. O laranja é a única "faísca" quente.
- Luzes e cortes seguem os ângulos do símbolo (45° / 67,5°) para não virar template genérico de SaaS.
- Cuidados: variar a intensidade da luz entre seções para dar ritmo; vidro fosco com moderação (pesa no celular); contraste de texto sempre legível.

## Mapa de seções (aprovar com o cliente)
1. Hero: promessa ("Você já tem os produtos. Agora é hora de vender mais."), para quem, formato, foto do Marcelo, CTA WhatsApp, micro-provas.
2. Prova imediata: 2–3 cortes curtos de depoimento em vídeo.
3. Identificação: "Você se reconhece?" (situações de dor).
4. A causa real: não é falta de esforço, é falta de método.
5. Quem é o Marcelo: empresário com operação real (Brazotti), números.
6. O método: Entender → Decidir → Aplicar.
7. O que você vai trabalhar: as 7 frentes.
8. Para quem é / para quem não é + pré-requisito.
9. Depoimentos completos em vídeo.
10. Formatos: Online x Presencial (sem preço).
11. Como funciona depois do clique (3 passos).
12. FAQ de objeções.
13. CTA final com qualificador (monta a mensagem do WhatsApp).
14. Rodapé.
Extras: botão flutuante de WhatsApp no mobile; CTA a cada 2–3 seções; calculadora de margem opcional (decidir).

## Vídeos de depoimento
- Formato vertical 9:16, legenda gravada (a maioria assiste sem som), miniatura com nome + negócio + frase.
- Carregar só no play (YouTube não listado ou serviço de vídeo) para não pesar a página.
- Pendente: quantidade, duração, quem fala e o resultado citado em cada um.

## Requisitos técnicos
- Mobile first (tráfego vem de Instagram e anúncios). Testar em 390px, 768px e 1440px.
- Performance: imagens otimizadas (≤ ~300 KB cada), lazy load, nada que bloqueie o primeiro carregamento.
- Respeitar `prefers-reduced-motion`. Conteúdo visível mesmo se o JavaScript falhar.
- Português do Brasil em todo o conteúdo. SEO básico + Open Graph.

## Pendências com o cliente
- Confirmar o número do WhatsApp (9º dígito).
- Vídeos de depoimento (envio + informações).
- Vagas limitadas por mês? (escassez real ou não usar).
- Manter ou não a calculadora de margem.
- Autorização de uso das fotos em que aparece o parceiro.
- Documentação do número de faturamento.
