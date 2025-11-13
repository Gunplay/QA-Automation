import { expect } from 'chai';
import { requestUsers } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';

describe('Users API - Delete User', function () {
	this.timeout(10000);

	let userId;

	before(async function () {
		const newUser = generateUser();
		const res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
		userId = res.body.id;
	});

	it('4.1 → DELETE /users/:id should delete user', async function () {
		const res = await requestUsers
			.delete(`/users/${userId}`)
			.set('Accept', 'application/json');
		expect(res.status).to.equal(200);
	});

	it('4.2 → GET /users/:id should return 404 after delete', async function () {
		const res = await requestUsers
			.get(`/users/${userId}`)
			.set('Accept', 'application/json');
		expect(res.status).to.equal(404);
	});
});
