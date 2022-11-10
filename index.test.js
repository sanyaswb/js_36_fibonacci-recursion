const fibonacci = require('./index');
const solution = require('./system/solution');
const { getRandomInt, findString } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof fibonacci(10);

	expect(type).toBe('number');
});

test('Необходимо использовать цикл for или while', async () => {
	const forMatch = await findString('for (');
	const whileMatch = await findString('while (');

	expect(forMatch || whileMatch).toBeFalsy();
});

test('Тест. n: 1', () => {
	const res = fibonacci(1);

	expect(res).toBe(0);
});

test('Тест. n: 2', () => {
	const res = fibonacci(2);

	expect(res).toBe(1);
});

test('Тест. n: 3', () => {
	const res = fibonacci(3);

	expect(res).toBe(1);
});

test('Тест. n: 10', () => {
	const res = fibonacci(10);

	expect(res).toBe(34);
});

test('Тест. n: 41', () => {
	const res = fibonacci(41);

	expect(res).toBe(102334155);
});

test('Тест. n: 8', () => {
	const res = fibonacci(8);

	expect(res).toBe(13);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const randNumber = getRandomInt(1, 22);

		if (solution(randNumber) !== fibonacci(randNumber)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});