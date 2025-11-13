import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2/users');

describe('users', function () {
	it('GET / users', function () {
		request.get();
	});
});
