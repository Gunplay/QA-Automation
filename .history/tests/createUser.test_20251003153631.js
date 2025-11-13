import 'dotenv/config';

describe('User', function () {
	it('User must be created', async function () {
		const newUser = {
			firstName: 'Muhammad',
			lastName: 'Ovi',
			age: 250,
			email: `test${Date.now()}@gmail.com`,
		};
	});
});
