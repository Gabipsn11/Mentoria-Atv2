function filtrarPares(numeros) {
const pares = numeros.filter(numero => numero % 2 === 0);  
    return pares;
  }  
  const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filtrarPares(arrayDeNumeros)); 