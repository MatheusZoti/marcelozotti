// Seção 3 · "Você se reconhece?"
// Situações tiradas do público e das frentes dos pitches (loja física que quer começar,
// operação que já vende) e do brand book ("antes de baixar seu preço…"). Sem promessas.
// `resumo` é o trecho que entra na mensagem do WhatsApp quando a pessoa marca a placa.

export interface Situacao {
  id: string;
  area: string;
  texto: string;
  resumo: string;
}

export const situacoes: Situacao[] = [
  {
    id: 'comeco',
    area: 'Começo',
    texto:
      'Você tem produtos e clientes na loja física, mas não sabe por onde começar no Mercado Livre e na Shopee.',
    resumo: 'tenho produtos, mas não sei por onde começar nos marketplaces',
  },
  {
    id: 'margem',
    area: 'Margem',
    texto: 'Você já vende, mas não sabe dizer quanto sobra de verdade depois de taxas, frete e custos.',
    resumo: 'não sei quanto sobra depois de taxas, frete e custos',
  },
  {
    id: 'preco',
    area: 'Preço',
    texto: 'Para acompanhar a concorrência, você baixa o preço. E a margem vai junto.',
    resumo: 'baixo o preço para acompanhar a concorrência',
  },
  {
    id: 'anuncios',
    area: 'Anúncios',
    texto: 'Seus anúncios não aparecem ou não convertem, e você não sabe o que mudar primeiro.',
    resumo: 'meus anúncios não aparecem ou não convertem',
  },
  {
    id: 'operacao',
    area: 'Operação',
    texto: 'Envios, reputação e dúvidas de clientes tomam o seu dia, e o crescimento fica para depois.',
    resumo: 'a operação toma meu dia e o crescimento fica para depois',
  },
  {
    id: 'publicidade',
    area: 'Publicidade',
    texto: 'Você investe em publicidade sem saber se o retorno compensa.',
    resumo: 'invisto em publicidade sem saber se compensa',
  },
];
