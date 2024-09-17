function mapearNomes(pessoas) {
    const nomesMaiusculos = pessoas.map(pessoa => pessoa.nome.toUpperCase());
    return nomesMaiusculos;
  }
  const arrayDePessoas = [
    {nome: 'Elon Musk', idade: 66},
    {nome: 'Gabriela', idade: 19},
    {nome: 'Fernando Cadeira', idade: 40},
    {nome: 'Datena', idade: 60},
    {nome: 'Pablo Marçal', idade: 35}
  ];

  console.log(mapearNomes(arrayDePessoas));
