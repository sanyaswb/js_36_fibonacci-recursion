function fibonacci(n) {
	if (n === 1) {
		return 0;
	} else if (n < 3) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
