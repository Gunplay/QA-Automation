import { expect } from 'chai';
import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';
// import {
// 	isGmail,
// 	isNonEmptyString,
// 	isPositiveNumber,
// 	isValidEmail,
// } from '../helpers/validators.js';

describe('LOGIN User', function () {
	this.timeout(10000);
	let user;

	before(async function name(params) {
		user = UserOfDummyJson();
		res = await request
			.post('/login')
			.set('Accept', 'application/json')
			.send(user);
		console.log('res', res.body);
	});

	it('login user, -> status must be: 200', function () {
		expect(res.body).include({
			username: 'emilys',
			password: 'emilyspass',
			expiresInMins: 30,
		});
	});
});
