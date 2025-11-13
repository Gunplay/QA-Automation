import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2');

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
