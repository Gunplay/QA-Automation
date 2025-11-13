import { expect } from 'chai';
import { request } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';

describe('Users API - Read User', function () {
	this.timeout(10000);

	let createdUser;
	let userId;

	before(async function () {
		const newUser = generateUser();
		const res = await request
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
		createdUser = res.body;
		userId = res.body.id;
	});

	it('2.1 → GET /users/:id should return user', async function () {
		const res = await request
			.get(`/users/${userId}`)
			.set('Accept', 'application/json');
		expect(res.status).to.equal(200)
		expect(res.body).to.include({
			firstName: createdUser.firstName,
			lastName: createdUser.lastName,
			email: createdUser.email,
		});
		console.log(`Actual status ${res.status}`);
		expect(res.body).to.have.property('id', userId);
	});
});
);