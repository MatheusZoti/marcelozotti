// Seção 4 · "A causa real": a conta que quase ninguém faz (ref-03).
// EXEMPLO ILUSTRATIVO com números redondos. Não são taxas reais de nenhum marketplace
// nem resultado de aluno; a página diz isso logo abaixo do gráfico.

const premissas = {
  comissao: 0.18, // comissão e taxas, % do preço
  imposto: 0.08, // % do preço
  frete: 14, // R$ por venda
  custo: 52, // R$ por unidade
};

export interface Parcela {
  id: string;
  nome: string;
  tipo: 'total' | 'saida' | 'sobra';
  valor: number; // R$ (negativo nas saídas)
  ini: number; // posição no gráfico, de 0 a 100 (escala do preço cheio)
  fim: number;
}

export interface Cenario {
  id: 'cheio' | 'desconto';
  rotulo: string;
  preco: number;
  parcelas: Parcela[];
  sobra: number;
}

function decompor(preco: number): { parcelas: Parcela[]; sobra: number } {
  const saidas = [
    { id: 'comissao', nome: 'Comissão e taxas', valor: preco * premissas.comissao },
    { id: 'frete', nome: 'Frete', valor: premissas.frete },
    { id: 'imposto', nome: 'Imposto', valor: preco * premissas.imposto },
    { id: 'custo', nome: 'Custo do produto', valor: premissas.custo },
  ];

  // cascata: cada saída desce a partir de onde a anterior parou
  let nivel = preco;
  const parcelasSaida: Parcela[] = saidas.map((saida) => {
    const fim = nivel;
    nivel -= saida.valor;
    return { ...saida, tipo: 'saida', valor: -saida.valor, ini: nivel, fim };
  });

  const sobra = nivel;

  return {
    sobra,
    parcelas: [
      { id: 'preco', nome: 'Preço de venda', tipo: 'total', valor: preco, ini: 0, fim: preco },
      ...parcelasSaida,
      { id: 'sobra', nome: 'Sobra', tipo: 'sobra', valor: sobra, ini: 0, fim: sobra },
    ],
  };
}

export const cenarios: Cenario[] = [
  { id: 'cheio', rotulo: 'Preço cheio', preco: 100, ...decompor(100) },
  { id: 'desconto', rotulo: 'Com 10% de desconto', preco: 90, ...decompor(90) },
];

const [cheio, desconto] = cenarios;

// "10% a menos no preço, X% a menos de sobra" (arredondado para baixo, sem exagerar)
export const quedaDaSobra = Math.floor((1 - desconto.sobra / cheio.sobra) * 100);

const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function formatarReais(valor: number): string {
  const texto = moeda.format(Math.abs(valor));
  return valor < 0 ? `− ${texto}` : texto;
}
