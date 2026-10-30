// Seção 5 · Quem é o Marcelo. Texto adaptado do slide "Quem sou eu" dos pitches
// e das "Provas de autoridade" do brand book. Só dados confirmados.

export const bio = [
  'Sou Marcelo Zotti, empresário, fundador da Brazotti Distribuidora e mentor de marketplaces. Tenho mais de 6 anos de experiência em vendas nos marketplaces e atuo diretamente na gestão de uma operação real de vendas online.',
  'Minha trajetória reúne experiência comercial, negociação e gestão empresarial. Na mentoria, ensino o que aplico na minha operação e explico o porquê de cada decisão.',
];

export interface Prova {
  numero: string;
  rotulo: string;
  acesa?: boolean;
}

export const provas: Prova[] = [
  { numero: '6+', rotulo: 'anos de experiência em vendas nos marketplaces', acesa: true },
  { numero: 'Brazotti', rotulo: 'distribuidora fundada e administrada por ele' },
  { numero: 'Clientes', rotulo: 'gestão e orientação de operações de terceiros' },
];

// PENDENTE: só ligar com documentação do cliente (regra do CLAUDE.md e do brand book).
// Sempre como faturamento, nunca como lucro, e com a nota de que não é promessa.
export const faturamento = {
  exibir: false,
  numero: 'R$ 400 mil',
  rotulo: 'de faturamento mensal informado na operação própria',
  nota: 'Faturamento da operação do Marcelo, não do aluno. Não é promessa de resultado.',
};

// Segunda fileira da parede: o que a pessoa tem com ele na mentoria (dados dos pitches).
export const comEle = {
  titulo: 'Na mentoria, com ele',
  dados: [
    { numero: '1:1', rotulo: 'individual: só você e ele' },
    { numero: '8h', rotulo: 'ao vivo com o Marcelo' },
    { numero: '7', rotulo: 'frentes, do diagnóstico ao crescimento' },
    { numero: '2', rotulo: 'marketplaces: Mercado Livre e Shopee' },
  ],
};
