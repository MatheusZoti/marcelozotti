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

// Cada botão envia uma mensagem diferente para a equipe saber de onde o lead veio.
// A chave também é o valor de `cta` no evento `whatsapp_click` do dataLayer.
export const MENSAGENS_WHATSAPP = {
  cabecalho: 'Olá! Vim pela sua página e quero saber mais sobre a mentoria individual.',
  hero: 'Olá! Vim pela sua página e quero conversar sobre a mentoria individual para a minha empresa.',
  flutuante: 'Olá! Vim pela sua página e quero saber mais sobre a mentoria individual.',
  // Mensagem padrão; com JavaScript, a seção 3 troca pela lista do que a pessoa marcou.
  identificacao:
    'Olá! Vim pela sua página, me reconheci em algumas situações e quero conversar sobre a mentoria.',
  marcelo:
    'Olá! Conheci sua trajetória pela página e quero conversar sobre a mentoria individual.',
  frentes:
    'Olá! Vi as 7 frentes da mentoria na sua página e quero conversar sobre a minha operação.',
  'formato-online':
    'Olá! Vim pela sua página e tenho interesse na mentoria individual online. Pode me passar os detalhes?',
  'formato-presencial':
    'Olá! Vim pela sua página e tenho interesse na mentoria individual presencial, em Curitiba e região. Pode me passar os detalhes?',
  faq: 'Olá! Li as perguntas frequentes na sua página e ainda tenho uma dúvida sobre a mentoria.',
  // Mensagem padrão; com JavaScript, o qualificador da seção 13 acrescenta as respostas.
  final: 'Olá! Vim pela sua página e quero conversar sobre a mentoria individual.',
  rodape: 'Olá! Vim pela sua página e quero saber mais sobre a mentoria individual.',
  // página de links (/links), usada na bio do Instagram
  links: 'Olá! Vim pelo link da sua bio no Instagram e quero conversar sobre a mentoria individual.',
} as const;

export type OrigemCta = keyof typeof MENSAGENS_WHATSAPP;

// Número para exibir na página, derivado da constante: "(41) 9962-6962" ou "(41) 99962-6962".
export function telefoneFormatado(): string {
  const local = WHATSAPP_NUMERO.slice(2); // sem o 55
  const ddd = local.slice(0, 2);
  const numero = local.slice(2);
  return `(${ddd}) ${numero.slice(0, -4)}-${numero.slice(-4)}`;
}

export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export function linkWhatsAppPorOrigem(origem: OrigemCta): string {
  return linkWhatsApp(MENSAGENS_WHATSAPP[origem]);
}
