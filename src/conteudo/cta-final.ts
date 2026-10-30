// Seção 13 · CTA final com qualificador.
// Título e apoio: slide "O próximo passo" dos pitches. As perguntas usam os perfis, formatos
// e marketplaces dos pitches. As respostas viram linhas na mensagem do WhatsApp.

export const titulo = 'Vamos construir juntos a estratégia para a sua empresa vender mais?';
export const apoio =
  'Mentoria individual, experiência prática e orientação focada na realidade da sua operação.';

export interface Opcao {
  valor: string;
  rotulo: string;
  naMensagem: string;
}

export interface Pergunta {
  id: string;
  pergunta: string;
  naMensagem: string; // rótulo da linha na mensagem
  opcoes: Opcao[];
}

export const perguntas: Pergunta[] = [
  {
    id: 'momento',
    pergunta: 'Qual é o momento da sua empresa?',
    naMensagem: 'Momento',
    opcoes: [
      {
        valor: 'comecar',
        rotulo: 'Tenho produtos e quero começar a vender online',
        naMensagem: 'tenho produtos e quero começar a vender online',
      },
      {
        valor: 'melhorar',
        rotulo: 'Já vendo online e quero melhorar resultados',
        naMensagem: 'já vendo online e quero melhorar resultados',
      },
    ],
  },
  {
    id: 'formato',
    pergunta: 'Qual formato você prefere?',
    naMensagem: 'Formato',
    opcoes: [
      { valor: 'online', rotulo: 'Online', naMensagem: 'online' },
      { valor: 'presencial', rotulo: 'Presencial · Curitiba e região', naMensagem: 'presencial (Curitiba e região)' },
      { valor: 'indefinido', rotulo: 'Ainda não sei', naMensagem: 'ainda não sei' },
    ],
  },
  {
    id: 'marketplace',
    pergunta: 'Em qual marketplace?',
    naMensagem: 'Marketplace',
    opcoes: [
      { valor: 'ml', rotulo: 'Mercado Livre', naMensagem: 'Mercado Livre' },
      { valor: 'shopee', rotulo: 'Shopee', naMensagem: 'Shopee' },
      { valor: 'ambos', rotulo: 'Os dois', naMensagem: 'Mercado Livre e Shopee' },
    ],
  },
];
