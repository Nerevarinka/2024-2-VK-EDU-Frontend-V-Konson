import { correctSentence } from './correctSentence';

describe("Тестирование функции correctSentence", () => {
  test('Возвращает предложение с заглавной буквы с точкой в конце', () => {
    expect(correctSentence("greetings, friends")).toBe("Greetings, friends.");
    expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.");
    expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.");
  });

  test('Возвращает false для некорректных типов', () => {
		expect(correctSentence(-123)).toBe(false);
    expect(correctSentence(null)).toBe(false);
    expect(correctSentence(undefined)).toBe(false);
    expect(correctSentence({})).toBe(false);
	});

  test('Возвращает false для пустой строки', () => {
		expect(correctSentence("")).toBe(false);
  });
});
