import { expect } from 'chai';
import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';

describe('LOGIN User', function () {
	this.timeout(10000);
	let res;
	let user;

	before(async function name(params) {
		user = UserOfDummyJson();
		res = await request
			.post('/login')
			.set('Accept', 'application/json')
			.send(user);
		console.log('res', res.body);
	});

	it('login user, -> status must be: 200', async function () {
		expect(res.body).include({
			username: 'emilys',
			password: 'emilyspass',
			expiresInMins: 30,
		});

		it('User date must be included JWT', function () {
			expect(res.body).to.have.property('token');
		});
	});
});
