// Holofote: com mouse, a placa com .holofote recebe a posição do ponteiro (--mx, --my)
// e a luz da borda e do vidro acompanha o cursor (luz.css). Sem o script, fica no centro.

document.addEventListener('pointermove', (evento) => {
  if (evento.pointerType !== 'mouse' || !(evento.target instanceof Element)) return;

  // .holofote usa os pseudo-elementos prontos (luz.css); [data-holofote] só recebe a posição
  const placa = evento.target.closest<HTMLElement>('.holofote, [data-holofote]');
  if (!placa) return;

  const caixa = placa.getBoundingClientRect();
  placa.style.setProperty('--mx', `${(evento.clientX - caixa.left).toFixed(0)}px`);
  placa.style.setProperty('--my', `${(evento.clientY - caixa.top).toFixed(0)}px`);
});

export {};
