// Seção 10 · Formatos. Fonte: slides "Formato", "Diferencial" e "Investimento" dos dois pitches.
// SEM PREÇO (regra do projeto): investimento e condições são passados pelo Marcelo no WhatsApp.
// Enxuta de propósito: os números da mentoria já aparecem no hero e no bento, e o suporte entre
// os encontros está no FAQ. Aqui a pessoa só escolhe o formato.

export const titulo = 'Dois jeitos de ter o Marcelo ao seu lado.';

// o que vale para os dois formatos, numa linha só
export const incluso = ['4 encontros de 2h', '1 por semana', 'WhatsApp direto', 'Grupo de suporte'];

export interface Formato {
  id: 'online' | 'presencial';
  nome: string;
  resumo: string;
  alcance: string;
  restrito: boolean;
  cta: 'formato-online' | 'formato-presencial';
  textoBotao: string;
}

export const formatos: Formato[] = [
  {
    id: 'online',
    nome: 'Online',
    resumo: 'Ao vivo por videoconferência, de onde você estiver.',
    alcance: 'Todo o Brasil',
    restrito: false,
    cta: 'formato-online',
    textoBotao: 'Quero a mentoria online',
  },
  {
    id: 'presencial',
    nome: 'Presencial',
    resumo: 'Cara a cara, no escritório do Marcelo em Curitiba (PR).',
    alcance: 'Somente Curitiba e região',
    restrito: true,
    cta: 'formato-presencial',
    textoBotao: 'Quero a mentoria presencial',
  },
];

export const notaInvestimento =
  'Investimento e condições são passados pelo Marcelo no WhatsApp. Parcelamento pode ser disponibilizado.';
