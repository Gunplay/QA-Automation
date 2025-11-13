import 'dotenv/config';
import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = process.env.GOREST_TOKEN;

describe('users', function () {
	it('GET /users should return users list', async function () {
		const res = await request
			.get(`users?access-token=${TOKEN}`)
			.set('Authoriz')
			.end((err, res) => {
				console.log(err);
				console.log(res.body);
			});
	});
});
