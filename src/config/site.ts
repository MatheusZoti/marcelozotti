// Configuração única do site. Trocar dados de contato SÓ aqui.

// PENDENTE: confirmar com o cliente. Celular no Brasil costuma ter 9 dígitos após o DDD
// e este tem 8 (41 9962-6962). Se mudar, altere apenas esta linha.
export const WHATSAPP_NUMERO = '554199626962';

// PENDENTE: ID do contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = GTM desligado.
export const GTM_ID = '';

export const SITE = {
  nome: 'Marcelo Zotti · Mentor de Marketplaces',
  titulo: 'Mentoria individual de marketplaces com Marcelo Zotti | Mercado Livre e Shopee',
  descricao:
    'Mentoria individual online ou presencial (Curitiba) para empresas que já têm produtos e querem vender mais no Mercado Livre e na Shopee. 4 encontros ao vivo com um empresário que vive o marketplace na prática.',
  locale: 'pt_BR',
} as const;

// Cada botão envia uma mensagem diferente para o Marcelo saber de onde o lead veio.
// A chave também é o valor de `cta` no evento `whatsapp_click` do dataLayer.
export const MENSAGENS_WHATSAPP = {
  cabecalho: 'Olá, Marcelo! Vim pela sua página e quero saber mais sobre a mentoria individual.',
  hero: 'Olá, Marcelo! Vim pela sua página e quero conversar sobre a mentoria individual para a minha empresa.',
  flutuante: 'Olá, Marcelo! Vim pela sua página e quero saber mais sobre a mentoria individual.',
} as const;

export type OrigemCta = keyof typeof MENSAGENS_WHATSAPP;

export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export function linkWhatsAppPorOrigem(origem: OrigemCta): string {
  return linkWhatsApp(MENSAGENS_WHATSAPP[origem]);
}
