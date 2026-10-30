// Seção 8 · Para quem é / para quem não é.
// "Para quem é" e o pré-requisito vêm do slide "Público-alvo" dos pitches (texto literal).
// "Para quem não é" deriva das regras do brand book (sem promessas, prudência, formato ao vivo)
// e do pré-requisito. VALIDAR COM O MARCELO antes de publicar.

export const titulo = 'Uma mentoria adaptada ao momento do seu negócio.';

export interface Perfil {
  rotulo: string;
  situacao: string;
  detalhe: string;
}

export const paraQuemE: Perfil[] = [
  {
    rotulo: 'Loja física ou empresa',
    situacao: 'Você já tem os produtos e quer começar a vender online.',
    detalhe: 'Expanda sua operação para o Mercado Livre e a Shopee com orientação estruturada.',
  },
  {
    rotulo: 'Operação digital',
    situacao: 'Você já vende e quer melhorar seus resultados.',
    detalhe: 'Revise preços, anúncios, processos e estratégias para crescer com mais consistência.',
  },
];

export const paraQuemNaoE: string[] = [
  'Quem ainda não tem produtos para vender: a mentoria parte do que a sua empresa já possui.',
  'Quem procura dinheiro rápido ou faturamento garantido. Aqui não tem promessa, tem método.',
  'Quem prefere um curso gravado para assistir sozinho: os encontros são individuais e ao vivo.',
  'Quem não vai ter tempo de colocar as decisões em prática entre os encontros.',
];

export const preRequisito = 'Já possuir produtos para comercialização.';
