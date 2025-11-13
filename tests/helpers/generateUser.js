export function generateUser() {
	return {
		firstName: 'Adam',
		lastName: 'Ovi',
		age: 25,
		email: `test${Date.now()}@gmail.com`,
		address: 'Taiwan',
	};
}
