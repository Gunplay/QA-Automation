import { expect } from 'chai';
import 'dotenv/config';
import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = process.env.GOREST_TOKEN;

describe('users', function () {
	it('GET /users should return users list', async function () {
		const res = await request
			//.get(`users?access-token=${TOKEN}`)
			.get('users')
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				console.log(err);
				console.log(res.body);
			});

		expect(res.status).to.equal(200);
		expect(res.body).to.be.an('array');
		console.log('Users count:', res.body.length);
	});
});
