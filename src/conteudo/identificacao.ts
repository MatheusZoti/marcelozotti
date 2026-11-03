// Seção 3 · "Você se reconhece?"
// Situações tiradas do público e das frentes dos pitches (loja física que quer começar,
// operação que já vende) e do brand book ("antes de baixar seu preço…"). Sem promessas.
// `resumo` é o trecho que entra na mensagem do WhatsApp quando a pessoa marca a placa.

export interface Situacao {
  id: string;
  titulo: string; // nome curto do problema (o que a pessoa lê primeiro)
  texto: string; // uma frase só
  resumo: string;
}

export const situacoes: Situacao[] = [
  {
    id: 'comeco',
    titulo: 'Por onde começar',
    texto: 'Tem produtos, mas não sabe como começar no Mercado Livre e na Shopee.',
    resumo: 'tenho produtos, mas não sei por onde começar nos marketplaces',
  },
  {
    id: 'margem',
    titulo: 'Quanto sobra',
    texto: 'Vende, mas não sabe quanto sobra depois de taxas, frete e custos.',
    resumo: 'não sei quanto sobra depois de taxas, frete e custos',
  },
  {
    id: 'preco',
    titulo: 'Guerra de preço',
    texto: 'Baixa o preço para competir, e a margem vai junto.',
    resumo: 'baixo o preço para acompanhar a concorrência',
  },
  {
    id: 'anuncios',
    titulo: 'Anúncios parados',
    texto: 'Seus anúncios não aparecem ou não vendem.',
    resumo: 'meus anúncios não aparecem ou não convertem',
  },
  {
    id: 'operacao',
    titulo: 'Rotina que trava',
    texto: 'Envios e atendimento tomam o dia; o crescimento fica para depois.',
    resumo: 'a operação toma meu dia e o crescimento fica para depois',
  },
  {
    id: 'publicidade',
    titulo: 'Publicidade às cegas',
    texto: 'Investe em Mercado Ads ou Shopee Ads sem saber se compensa.',
    resumo: 'invisto em publicidade sem saber se compensa',
  },
];
