function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  const soma = (a, b) => a + b;
  const multiplicacao = (a, b) => a * b;
  const divisao = (a, b) => a / b;
  const num1 = 10;
  const num2 = 5;
  
  console.log('Soma:', executarOperacao(num1, num2, soma));          
  console.log('Multiplicação:', executarOperacao(num1, num2, multiplicacao)); 
  console.log('Divisão:', executarOperacao(num1, num2, divisao));   