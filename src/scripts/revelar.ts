// Revelação na rolagem: cada bloco com [data-revelar] ganha [data-revelado] quando entra na tela.
// Enquanto isso, as animações dentro dele ficam pausadas no primeiro quadro (movimento.css),
// então a entrada acontece quando a pessoa chega lá, não no carregamento.
// Sem este script (ou com "reduzir movimento") a classe .revelar não fica no <html> e nada pausa.
//
// Grupo: [data-revelar-grupo="<media query>"] faz todos os blocos de dentro entrarem juntos,
// em cascata pela ordem do HTML, quando o primeiro aparece (ex.: o bento inteiro no desktop).
// Fora da media query, cada bloco entra sozinho.

const raiz = document.documentElement;

if (raiz.classList.contains('revelar')) {
  const revelar = (el: Element, lote: number) => {
    if (el.hasAttribute('data-revelado')) return;
    (el as HTMLElement).style.setProperty('--lote', `${lote}ms`);
    el.setAttribute('data-revelado', '');
    observador.unobserve(el);
    inteiro.unobserve(el);
  };

  // reserva para o fim da página: um bloco que já cabe inteiro na tela também entra, mesmo
  // que nunca passe da linha de 85% (o rodapé, por exemplo, mora nos últimos 15% da tela)
  const inteiro = new IntersectionObserver(
    (entradas) =>
      entradas
        .filter((e) => e.intersectionRatio >= 0.98)
        .forEach((e, i) => revelar(e.target, i * 90)),
    { threshold: 0.98 },
  );

  const grupoAtivo = (el: Element) => {
    const grupo = el.closest<HTMLElement>('[data-revelar-grupo]');
    if (!grupo) return null;
    const midia = grupo.dataset.revelarGrupo;
    return !midia || window.matchMedia(midia).matches ? grupo : null;
  };

  // dispara quando o topo do bloco passa de ~85% da altura da tela.
  // Blocos que entram juntos ganham --lote (0, 90, 180 ms…) para as seções fazerem cascata.
  const observador = new IntersectionObserver(
    (entradas) =>
      entradas
        .filter((e) => e.isIntersecting)
        .forEach((e, i) => {
          const grupo = grupoAtivo(e.target);
          if (!grupo) return revelar(e.target, i * 90);
          grupo
            .querySelectorAll('[data-revelar]:not([data-revelado])')
            .forEach((membro, ordem) => revelar(membro, ordem * 110));
        }),
    { rootMargin: '0px 0px -15% 0px' },
  );

  document.querySelectorAll('[data-revelar]').forEach((el) => {
    // o que já passou da tela (recarregar no meio da página) aparece pronto
    if (el.getBoundingClientRect().bottom < 0) {
      el.setAttribute('data-revelado', '');
      el.getAnimations({ subtree: true }).forEach((a) => {
        if (a.effect?.getComputedTiming().iterations !== Infinity) a.finish(); // as contínuas seguem
      });
      return;
    }
    observador.observe(el);
    inteiro.observe(el);
  });

  (window as Window & { revelarPronto?: boolean }).revelarPronto = true;
}

export {};
