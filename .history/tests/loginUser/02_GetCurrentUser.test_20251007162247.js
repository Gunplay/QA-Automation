import { expect } from 'chai';
import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';

describe('Current user', function () {
	it('Must be logged user with OWN JWT', async function () {
		res = await request
			.get('/me')
			.set('Accept', 'application/json')
			.send({ Authorization: 'Bearer /* YOUR_ACCESS_TOKEN_HERE */' });
	});
});
