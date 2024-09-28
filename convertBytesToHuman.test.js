/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

// import { convertBytesToHuman } from './convertBytesToHuman';
import { convertBytesToHuman } from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("text")).toBe(false)
});

test('Возвращает false для NaN', () => {
  expect(convertBytesToHuman(NaN)).toBe(false)
});

test('Возвращает false для undefined', () => {
  expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает false для null', () => {
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает false для отрицательного числа', () => {
  expect(convertBytesToHuman(-123)).toBe(false)
});

test('Возвращает корректное значение для чисел, обозначающих байты', () => {
  expect(convertBytesToHuman(5)).toBe("5 B")
});

test('Возвращает корректное значение для чисел, обозначающих килобайты', () => {
  expect(convertBytesToHuman(1024)).toBe("1 KB")
});

test('Возвращает корректное значение для чисел, обозначающих мегабайты', () => {
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
});

test('Возвращает корректное значение для чисел, обозначающих гигабайты', () => {
  expect(convertBytesToHuman(1610612736)).toBe("1.5 GB")
});
