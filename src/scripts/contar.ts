// Contagem: números com [data-contar] sobem de 0 até o valor quando o bloco [data-revelar]
// em volta aparece na tela. O texto original é o valor final (sem JS, o número já está certo).
// Atraso opcional em data-contar-atraso (ms), para acompanhar a entrada do bloco.

const raiz = document.documentElement;

if (raiz.classList.contains('revelar')) {
  const saida = (t: number) => 1 - Math.pow(1 - t, 4);
  const duracao = 1200;

  const contar = (el: HTMLElement) => {
    const final = el.textContent ?? '';
    const partes = final.match(/^(\D*)(\d+)(.*)$/s);
    if (!partes) return;
    const [, antes, alvo, depois] = partes;
    const total = Number(alvo);
    // soma o --lote do bloco (cascata), para o número contar quando o bloco de fato aparece
    const bloco = el.closest<HTMLElement>('[data-revelar]');
    const lote = parseFloat(bloco?.style.getPropertyValue('--lote') ?? '') || 0;
    const atraso = Number(el.dataset.contarAtraso ?? 0) + lote;
    const inicio = performance.now() + atraso;

    el.textContent = `${antes}0${depois}`;
    const passo = (agora: number) => {
      const t = Math.min(Math.max((agora - inicio) / duracao, 0), 1);
      el.textContent = t < 1 ? `${antes}${Math.round(total * saida(t))}${depois}` : final;
      if (t < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
    // garantia: em aba de segundo plano (sem quadros), o número final aparece mesmo assim
    window.setTimeout(() => (el.textContent = final), atraso + duracao + 300);
  };

  document.querySelectorAll<HTMLElement>('[data-contar]').forEach((el) => {
    const bloco = el.closest('[data-revelar]');
    if (!bloco || bloco.hasAttribute('data-revelado')) return;
    const observador = new MutationObserver(() => {
      if (!bloco.hasAttribute('data-revelado')) return;
      observador.disconnect();
      contar(el);
    });
    observador.observe(bloco, { attributes: true, attributeFilter: ['data-revelado'] });
  });
}

export {};
