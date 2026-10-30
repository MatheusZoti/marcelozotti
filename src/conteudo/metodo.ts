// Seção 6 · O método. Fonte: slide "O objetivo" dos pitches (01 Entender, 02 Decidir, 03 Aplicar).
// `pratica` traduz cada etapa com termos dos próprios pitches e do brand book, sem prometer resultado.

export const objetivo =
  'Transformar os produtos que sua empresa já possui em uma operação de vendas online mais competitiva, organizada e orientada por resultados.';

export interface Passo {
  verbo: string;
  frase: string;
  pratica: string;
}

export const passos: Passo[] = [
  {
    verbo: 'Entender',
    frase: 'a realidade e as oportunidades do seu negócio.',
    pratica: 'Antes de mudar qualquer coisa, olhar o cenário atual: produtos, números e objetivos.',
  },
  {
    verbo: 'Decidir',
    frase: 'com base em custos, margens e indicadores.',
    pratica: 'Escolher preço, produto e investimento pela conta, não pelo achismo.',
  },
  {
    verbo: 'Aplicar',
    frase: 'melhorias práticas no Mercado Livre e na Shopee.',
    pratica: 'Levar as decisões para os anúncios e a operação, com acompanhamento entre os encontros.',
  },
];
