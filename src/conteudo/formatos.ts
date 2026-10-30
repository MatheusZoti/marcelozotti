// Seção 10 · Formatos. Fonte: slides "Formato", "Diferencial" e "Investimento" dos dois pitches.
// SEM PREÇO (regra do projeto): investimento e condições são passados pelo Marcelo no WhatsApp.

export const titulo = 'Acompanhamento individual e personalizado.';

export const numeros = [
  { numero: '4', rotulo: 'encontros' },
  { numero: '2h', rotulo: 'por encontro' },
  { numero: '1x', rotulo: 'por semana' },
  { numero: '8h', rotulo: 'de mentoria ao vivo', acesa: true },
];

export const duracao = 'Ao longo de aproximadamente 30 dias.';

export const diferencial = {
  titulo: 'O acompanhamento continua entre os encontros.',
  itens: [
    {
      nome: 'WhatsApp direto',
      texto: 'Contato com o Marcelo para esclarecer dúvidas da operação entre uma mentoria e outra.',
    },
    {
      nome: 'Grupo de suporte',
      texto: 'Acesso ao grupo durante o período da mentoria para apoio e troca de dúvidas.',
    },
    {
      nome: 'Orientação personalizada',
      texto: 'Trabalho com os seus produtos, anúncios, números e desafios reais.',
    },
  ],
};

export interface Formato {
  id: 'online' | 'presencial';
  nome: string;
  resumo: string;
  detalhes: string[];
  alcance: string;
  restrito: boolean;
  cta: 'formato-online' | 'formato-presencial';
  textoBotao: string;
}

export const formatos: Formato[] = [
  {
    id: 'online',
    nome: 'Online',
    resumo: '100% online e ao vivo.',
    detalhes: ['Encontros por videoconferência', 'Foco nos produtos, desafios e objetivos da sua empresa'],
    alcance: 'Para todo o Brasil',
    restrito: false,
    cta: 'formato-online',
    textoBotao: 'Quero a mentoria online',
  },
  {
    id: 'presencial',
    nome: 'Presencial',
    resumo: 'No escritório do Marcelo, em Curitiba (PR).',
    detalhes: ['Encontros presenciais, cara a cara', 'Foco nos produtos, desafios e objetivos da sua empresa'],
    alcance: 'Somente Curitiba e região',
    restrito: true,
    cta: 'formato-presencial',
    textoBotao: 'Quero a mentoria presencial',
  },
];

export const notaInvestimento =
  'Investimento e condições são passados pelo Marcelo no WhatsApp. Parcelamento pode ser disponibilizado.';
