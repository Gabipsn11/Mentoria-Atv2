function analisarTransacoes(transacoes) {
    const totalPorCategoria = transacoes.reduce((acumulador, transacao) => {
      if (!acumulador[transacao.categoria]) {
        acumulador[transacao.categoria] = 0;
      }
      acumulador[transacao.categoria] += transacao.valor;
      return acumulador;
    }, {});
    const gastoPorUsuario = transacoes.reduce((acumulador, transacao) => {
      if (!acumulador[transacao.usuario]) {
        acumulador[transacao.usuario] = 0;
      }
      acumulador[transacao.usuario] += transacao.valor;
      return acumulador;
    }, {});
    const usuarioComMaiorGasto = Object.keys(gastoPorUsuario).reduce((usuarioMax, usuarioAtual) => {
      return gastoPorUsuario[usuarioAtual] > gastoPorUsuario[usuarioMax] ? usuarioAtual : usuarioMax;
    });
  
    return {
      totalPorCategoria,
      usuarioComMaiorGasto
    };
  }
  const transacoes = [
    { id: 't1', usuario: 'Alice', valor: 250.0, categoria: 'Tecnologia' },
    { id: 't2', usuario: 'Bob', valor: 150.0, categoria: 'Alimentação' },
    { id: 't3', usuario: 'Alice', valor: 300.0, categoria: 'Vestuário' },
    { id: 't4', usuario: 'Carlos', valor: 450.0, categoria: 'Tecnologia' },
    { id: 't5', usuario: 'Bob', valor: 200.0, categoria: 'Alimentação' }
  ];
  const resultado = analisarTransacoes(transacoes);
  console.log(resultado);