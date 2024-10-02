import { nonUniqueElements } from './nonUniqueElements';

describe("Тестирование функции nonUniqueElements", () => {
  test('Возвращает неуникальные элементы последовательности', () => {
    expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
    expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
    expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
    expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
  });

  test('Возвращает false для некорректных типов', () => {
    expect(nonUniqueElements("Text")).toEqual(false);
    expect(nonUniqueElements(null)).toEqual(false);
    expect(nonUniqueElements(undefined)).toEqual(false);
    expect(nonUniqueElements({})).toEqual(false);
  });
});
