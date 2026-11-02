// Seção 5 · Quem é o Marcelo. Texto adaptado do slide "Quem sou eu" dos pitches
// e das "Provas de autoridade" do brand book. Só dados confirmados.

export const bio = [
  'Sou Marcelo Zotti, empresário, fundador da Brazotti Distribuidora e mentor de marketplaces. Tenho mais de 6 anos de experiência em vendas nos marketplaces e atuo diretamente na gestão de uma operação real de vendas online.',
  'Minha trajetória reúne experiência comercial, negociação e gestão empresarial. Na mentoria, ensino o que aplico na minha operação e explico o porquê de cada decisão.',
];

// PENDENTE: só ligar com documentação do cliente (regra do CLAUDE.md e do brand book).
// Sempre como faturamento, nunca como lucro, e com a nota de que não é promessa.
export const faturamento = {
  exibir: false,
  numero: 'R$ 400 mil',
  rotulo: 'de faturamento mensal informado na operação própria',
  nota: 'Faturamento da operação do Marcelo, não do aluno. Não é promessa de resultado.',
};

// Bento da seção 5: quem ele é (experiência, operação, atuação) e o que a pessoa tem com ele
// na mentoria (formato, horas ao vivo, frentes, marketplaces). Fontes: pitches e brand book.
export const bento = {
  experiencia: {
    rotulo: 'Experiência',
    numero: '6+',
    texto: 'anos vendendo em marketplaces, à frente de uma operação real.',
  },
  operacao: {
    rotulo: 'Operação própria',
    titulo: 'Brazotti Distribuidora',
    texto: 'Fundada e administrada pelo Marcelo.',
  },
  // brand book, "Provas de autoridade": experiência própria, mercado e ensino
  atuacao: {
    rotulo: 'Na prática',
    titulo: 'Ensina o que aplica',
    itens: ['Operação própria', 'Operações de clientes', 'Mentorias práticas'],
  },
  individual: {
    rotulo: 'Formato',
    numero: '1:1',
    texto: 'Individual: só você e ele.',
  },
  aoVivo: {
    rotulo: 'Ao vivo',
    numero: '8h',
    texto: '4 encontros de 2h, um por semana.',
    encontros: 4,
  },
  frentes: {
    rotulo: 'Conteúdo',
    numero: '7',
    texto: 'frentes, do diagnóstico ao crescimento.',
  },
  foco: {
    rotulo: 'Foco',
    numero: '2',
    texto: 'marketplaces',
    canais: ['Mercado Livre', 'Shopee'],
  },
};
