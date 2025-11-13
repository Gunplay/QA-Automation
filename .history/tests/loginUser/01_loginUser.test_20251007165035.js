import { expect } from 'chai';
import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';

describe('LOGIN User', function () {
	this.timeout(10000);
	let res;
	let user;

	before(async function () {
		user = UserOfDummyJson();
		res = await request
			.post('/login')
			.set('Accept', 'application/json')
			.send(user);
		// console.log('Response:', res.body);
	});

	it('1.1 → login user -> status must be 200', function () {
		expect(res.status).to.equal(200);
	});

	it('1.2 → Response must include username and tokens', function () {
		expect(res.body).to.include({
			username: 'emilys',
			email: 'emily.johnson@x.dummyjson.com',
			firstName: 'Emily',
			lastName: 'Johnson',
			gender: 'female',
		});
		expect(res.body).to.have.property('accessToken').that.is.a('string');
		expect(res.body).to.have.property('refreshToken').that.is.a('string');
	});
});
