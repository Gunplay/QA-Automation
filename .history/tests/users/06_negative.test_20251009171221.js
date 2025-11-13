import { expect } from 'chai';
import { request } from '../config/api.js';

describe('Users API - Negative Tests', function () {
	this.timeout(10000);

	it('6.1 → Should fail creating user with invalid email', async () => {
		const res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send({
				firstName: 'Bad',
				lastName: 'Email',
				age: 25,
				email: 'bademail.com',
				address: 'Nowhere',
			});

		expect(res.status).to.be.oneOf([400, 422]);
		expect(res.body).to.have.property('message');
	});

	it('6.2 → Should fail creating user with negative age', async () => {
		const res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send({
				firstName: 'Old',
				lastName: 'User',
				age: -10,
				email: `test${Date.now()}@gmail.com`,
				address: 'Nowhere',
			});

		expect(res.status).to.be.oneOf([400, 422]);
		expect(res.body).to.have.property('message');
	});

	it('6.3 → Should fail creating user with empty fields', async () => {
		const res = await request
			.post('/add')
			.set('Accept', 'application/json')
			.send({});
		expect(res.status).to.be.oneOf([400, 422]);
		expect(res.body).to.have.property('message');
	});
});
