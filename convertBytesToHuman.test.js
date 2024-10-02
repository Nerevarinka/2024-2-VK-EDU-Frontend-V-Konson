/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */


import { convertBytesToHuman } from './convertBytesToHuman';

describe("Тестирование функции convertBytesToHuman", () => {
	test("Возвращает false для невалидных аргументов", () => {
		expect(convertBytesToHuman("text")).toBe(false);
		expect(convertBytesToHuman(NaN)).toBe(false);
		expect(convertBytesToHuman(undefined)).toBe(false);
		expect(convertBytesToHuman(null)).toBe(false);
	});

	test('Возвращает false для невалидного числа', () => {
		expect(convertBytesToHuman(-123)).toBe(false);
	});

	test('Возвращает корректное значение для валидных чисел', () => {
		expect(convertBytesToHuman(5)).toBe("5 B");
		expect(convertBytesToHuman(1024)).toBe("1 KB");
		expect(convertBytesToHuman(123123123)).toBe("117.42 MB");
		expect(convertBytesToHuman(1610612736)).toBe("1.5 GB");
	});
});
