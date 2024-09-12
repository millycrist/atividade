// Calculadora.test.js

const { soma, subtracao, multiplicacao, divisao } = require('./Calculadora');

describe('Calculadora', () => {
  test('deve somar dois números', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('deve subtrair dois números', () => {
    expect(subtracao(5, 3)).toBe(2);
  });

  test('deve multiplicar dois números', () => {
    expect(multiplicacao(4, 3)).toBe(12);
  });

  test('deve dividir dois números', () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test('deve lançar um erro ao tentar dividir por zero', () => {
    expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
  });
});
