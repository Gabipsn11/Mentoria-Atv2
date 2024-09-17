function mapearNomes(pessoas) {
    const nomesMaiusculos = pessoas.map(pessoa => pessoa.nome.toUpperCase());
    return nomesMaiusculos;
  }
  const arrayDePessoas = [
    {nome: 'Patricia', idade: 30},
    {nome: 'Carlos', idade: 25},
    {nome: 'Beatriz', idade: 40},
    {nome: 'Eduardo', idade: 35},
    {nome: 'Fernanda', idade: 28}
  ];

  console.log(mapearNomes(arrayDePessoas));