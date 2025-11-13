import { expect } from 'chai';
import { request } from '../config/api.js'; // путь должен быть верный
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

		expect(res.status).to.equal(201);
		expect(createdUser).to.have.property('id').that.is.a('number');
	});

	it('2.1 → GET /users/:id should return user', async function () {
		const res = await request
			.get(`/users/${userId}`)
			.set('Accept', 'application/json');

		if (res.body.id) {
			console.log('id:', res.body.id);
		}
		console.log('Status:', res.status);
		console.log('Body:', JSON.stringify(res.body, null, 2));

		expect(res.status).to.equal(200);
		expect(res.body).to.be.an('object');
		expect(res.body).to.include({
			firstName: createdUser.firstName,
			lastName: createdUser.lastName,
			email: createdUser.email,
		});
		expect(res.body).to.have.property('id', userId);
	});
});
