import supertest from 'supertest';

const request = supertest('https://dummyjson.com/users');

describe('User', function () {
	it('User must be created', async function () {
		const newUser = {
			firstName: 'Muhammad',
			lastName: 'Ovi',
			age: 250,
			email: `test${Date.now()}@gmail.com`,
		};

		await request.post('/add');
	});
});
