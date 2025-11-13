import 'dotenv/config';
import supertest from 'supertest';
import { expect } from 'chai';

const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = process.env.GOREST_TOKEN;

describe('users', function () {
	it('GET / users', function () {
		request.get(`users?access-token=${TOKEN}`).end((err, res) => {
			console.log(err);
			console.log(res.body);
		});
	});
});
