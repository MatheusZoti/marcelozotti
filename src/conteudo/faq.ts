// Seção 12 · FAQ de objeções. Respostas só com o que está nos pitches e nas regras do projeto.
// Fica de fora até confirmação: garantia de 7 dias, vagas limitadas, outros marketplaces.

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

export const perguntas: Pergunta[] = [
  {
    pergunta: 'Quanto custa a mentoria?',
    resposta:
      'O investimento e as condições são passados pelo Marcelo no WhatsApp, junto com as respostas às suas dúvidas. Parcelamento pode ser disponibilizado.',
  },
  {
    pergunta: 'A mentoria garante que eu vou vender mais?',
    resposta:
      'Não. Ninguém pode garantir resultado em marketplace, e o Marcelo não promete faturamento. O que a mentoria entrega é método: entender a sua operação, decidir com base em custos, margens e indicadores e aplicar melhorias práticas.',
  },
  {
    pergunta: 'Nunca vendi online. A mentoria serve para mim?',
    resposta:
      'Serve, desde que você já tenha produtos. Esse é um dos dois perfis da mentoria: loja física ou empresa que quer começar no Mercado Livre e na Shopee com orientação estruturada.',
  },
  {
    pergunta: 'Já vendo nos marketplaces. Ainda faz sentido?',
    resposta:
      'Faz. Esse é o outro perfil: operação digital que já vende e quer melhorar resultados. O trabalho passa por preços, anúncios, processos e estratégias, com os seus números reais.',
  },
  {
    pergunta: 'Preciso já ter produtos?',
    resposta:
      'Sim, é o pré-requisito. A mentoria parte dos produtos que a sua empresa já possui para transformar isso em uma operação de vendas online mais organizada.',
  },
  {
    pergunta: 'Moro fora de Curitiba. Posso participar?',
    resposta:
      'Pode, no formato online, que atende todo o Brasil por videoconferência. O presencial é só para Curitiba e região, no escritório do Marcelo.',
  },
  {
    pergunta: 'Quanto tempo dura e como são os encontros?',
    resposta:
      'São 4 encontros individuais de 2 horas, uma vez por semana, ao longo de aproximadamente 30 dias. No total, 8 horas de mentoria ao vivo, focadas nos produtos, desafios e objetivos da sua empresa.',
  },
  {
    pergunta: 'E se eu tiver dúvidas entre um encontro e outro?',
    resposta:
      'Você tem contato direto com o Marcelo pelo WhatsApp e acesso ao grupo de suporte durante o período da mentoria.',
  },
];
