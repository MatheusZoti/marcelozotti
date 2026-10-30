// Seção 7 · O que você vai trabalhar. Fonte: slide "Conteúdo" dos pitches (texto literal).

export interface Frente {
  titulo: string;
  detalhe: string;
}

export const frentes: Frente[] = [
  { titulo: 'Diagnóstico da operação', detalhe: 'Cenário atual, produtos e objetivos.' },
  { titulo: 'Estruturação das contas', detalhe: 'Organização dos canais de venda.' },
  { titulo: 'Análise da concorrência', detalhe: 'Preço, posicionamento e oportunidades.' },
  { titulo: 'Precificação e margem', detalhe: 'Taxas, frete, custos e lucratividade.' },
  { titulo: 'Anúncios que convertem', detalhe: 'Títulos, imagens, descrição e conversão.' },
  { titulo: 'Logística e operação', detalhe: 'Envios, reputação e processos.' },
  { titulo: 'Estratégias de crescimento', detalhe: 'Campanhas, publicidade e indicadores.' },
];

export const notaConteudo = 'Conteúdo ajustado ao estágio de cada empresa.';
