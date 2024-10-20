// Não faça nada neste arquivo
const somaNumeros = require('./index');

test('soma dos números de 1 a 3', () => {
  expect(somaNumeros(3)).toBe(6); // 1 + 2 + 3 = 6
});

test('soma dos números de 1 a 5', () => {
  expect(somaNumeros(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
});

test('soma dos números de 1 a 0', () => {
  expect(somaNumeros(0)).toBe(0); // Não há números para somar
});

test('soma dos números de 1 a 10', () => {
  expect(somaNumeros(10)).toBe(55); // 1 + 2 + ... + 10 = 55
});
