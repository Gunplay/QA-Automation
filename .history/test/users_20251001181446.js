import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2/users');

describe('users', function () {
	it('GET / users', function () {
		request.get(
			'users?0c5ed807a96f6b009e7642be9b337f2b84f4a401816b9d5434155f937cc4a8a8'
		);
	});
});
