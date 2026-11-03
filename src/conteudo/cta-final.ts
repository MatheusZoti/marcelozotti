// Seção 13 · CTA final com qualificador em 3 etapas.
// Título e apoio: slide "O próximo passo" dos pitches. As perguntas usam os perfis, formatos
// e marketplaces dos pitches. As respostas viram linhas na mensagem do WhatsApp.

export const titulo = 'Vamos construir juntos a estratégia para a sua empresa vender mais?';
export const apoio =
  'Mentoria individual, experiência prática e orientação focada na realidade da sua operação.';

// nomes dos ícones desenhados em 13-CtaFinal.astro
export type Icone = 'loja' | 'crescimento' | 'tela' | 'local' | 'duvida';

export interface Opcao {
  valor: string;
  rotulo: string;
  detalhe?: string;
  curto?: string; // versão curta para o resumo do que vai na mensagem
  icone?: Icone;
  naMensagem: string;
}

export interface Pergunta {
  id: string;
  pergunta: string;
  // cada etapa tem um estilo que combina com o número e o tipo de opção
  estilo: 'cartoes' | 'circulos' | 'segmentos';
  naMensagem: string; // rótulo da linha na mensagem
  opcoes: Opcao[];
}

export const perguntas: Pergunta[] = [
  {
    id: 'momento',
    pergunta: 'Qual é o momento da sua empresa?',
    estilo: 'cartoes',
    naMensagem: 'Momento',
    opcoes: [
      {
        valor: 'comecar',
        rotulo: 'Quero começar a vender online',
        curto: 'Começar a vender',
        detalhe: 'Já tenho produtos ou loja física.',
        icone: 'loja',
        naMensagem: 'tenho produtos e quero começar a vender online',
      },
      {
        valor: 'melhorar',
        rotulo: 'Quero melhorar meus resultados',
        curto: 'Melhorar resultados',
        detalhe: 'Já vendo nos marketplaces.',
        icone: 'crescimento',
        naMensagem: 'já vendo online e quero melhorar resultados',
      },
    ],
  },
  {
    id: 'formato',
    pergunta: 'Como você prefere os encontros?',
    estilo: 'circulos',
    naMensagem: 'Formato',
    opcoes: [
      { valor: 'online', rotulo: 'Online', detalhe: 'Todo o Brasil', icone: 'tela', naMensagem: 'online' },
      {
        valor: 'presencial',
        rotulo: 'Presencial',
        detalhe: 'Curitiba e região',
        icone: 'local',
        naMensagem: 'presencial (Curitiba e região)',
      },
      {
        valor: 'indefinido',
        rotulo: 'A definir',
        detalhe: 'Vemos na conversa',
        icone: 'duvida',
        naMensagem: 'ainda não sei',
      },
    ],
  },
  {
    id: 'marketplace',
    pergunta: 'Em qual marketplace você quer focar?',
    estilo: 'segmentos',
    naMensagem: 'Marketplace',
    opcoes: [
      { valor: 'ml', rotulo: 'Mercado Livre', naMensagem: 'Mercado Livre' },
      { valor: 'shopee', rotulo: 'Shopee', naMensagem: 'Shopee' },
      { valor: 'ambos', rotulo: 'Os dois', curto: 'Mercado Livre e Shopee', naMensagem: 'Mercado Livre e Shopee' },
    ],
  },
];
