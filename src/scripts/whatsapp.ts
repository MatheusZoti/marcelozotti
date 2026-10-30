// Rastreia todo clique em link de WhatsApp marcado com data-cta.
// O link funciona sozinho (href completo); este script só avisa o Google Tag Manager.

type EventoDataLayer = { event: string; [chave: string]: unknown };

declare global {
  interface Window {
    dataLayer?: EventoDataLayer[];
  }
}

document.addEventListener('click', (evento) => {
  const alvo = evento.target;
  if (!(alvo instanceof Element)) return;

  const link = alvo.closest<HTMLAnchorElement>('a[data-cta]');
  if (!link) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'whatsapp_click', cta: link.dataset.cta });
});

export {};
