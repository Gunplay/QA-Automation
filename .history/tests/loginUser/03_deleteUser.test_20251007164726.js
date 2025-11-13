import { expect } from 'chai';
import { request } from '../config/api.js';

describe('Current user', function () {
	it('Delete user by id', async function () {
		// Declare res before using it
		const res = await request
			.delete('/users/1') // endpoint
			.set('Accept', 'application/json');

		console.log(res.body);
		expect(res.status).to.equal(200);
		expect(res.body).to.have.property('username').that.is.a('string');
		expect(res.body).to.have.property('email').that.is.a('string');
		expect(res.body).to.have.property('firstName');
		expect(res.body).to.have.property('lastName');
	});
});
