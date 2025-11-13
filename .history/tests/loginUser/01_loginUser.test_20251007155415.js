// import { expect } from 'chai';
import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';
// import {
// 	isGmail,
// 	isNonEmptyString,
// 	isPositiveNumber,
// 	isValidEmail,
// } from '../helpers/validators.js';

describe('Should be logged user, -> 200', function () {
	this.timeout(10000);
	let user;

	this.beforeAll(async function name(params) {
		user = UserOfDummyJson();
		res = (await request.post('login').set('Accept', 'application/json')).send(
			user
		);
	});
	it('login user', function () {
		user = UserOfDummyJson();
	});
});
