// No hover com mouse, a luz dos botões de ação acompanha o ponteiro (--mouse-x).
// Sem este script a luz do hover fica centralizada; nada mais muda.

document.addEventListener('pointermove', (evento) => {
  if (evento.pointerType !== 'mouse' || !(evento.target instanceof Element)) return;

  const botao = evento.target.closest<HTMLElement>('.botao-luz');
  if (!botao) return;

  const caixa = botao.getBoundingClientRect();
  const x = ((evento.clientX - caixa.left) / caixa.width) * 100;
  botao.style.setProperty('--mouse-x', `${Math.min(100, Math.max(0, x)).toFixed(1)}%`);
});

export {};
