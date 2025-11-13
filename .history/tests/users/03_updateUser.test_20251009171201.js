import { expect } from 'chai';
import { request } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';

describe('Users API - Update User', function () {
	this.timeout(10000);

	let userId;
	const updatedName = 'Updated Name';

	before(async function () {
		const newUser = generateUser();
		const res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
		userId = res.body.id;
	});

	it('3.1 → PUT /users/:id should update name', async function () {
		const res = await requestUsers
			.put(`/users/${userId}`)
			.set('Accept', 'application/json')
			.send({ name: updatedName });

		expect(res.status).to.equal(200);
		expect(res.body).to.have.property('id', userId);
		expect(res.body).to.have.property('name', updatedName);
	});
});
