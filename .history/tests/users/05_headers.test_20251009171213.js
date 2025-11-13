import { expect } from 'chai';
import { request } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';

describe('Users API - Response Headers', function () {
	this.timeout(10000);

	let res;
	const newUser = generateUser();

	before(async function () {
		res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
	});

	it('5.1 → Content-Type must be application/json', () => {
		expect(res.headers['content-type']).to.include('application/json');
	});

	it('5.2 → Server header must exist', () => {
		expect(res.headers).to.have.property('server');
	});

	it('5.3 → Content-Length must be > 0', () => {
		expect(Number(res.headers['content-length'])).to.be.greaterThan(0);
	});

	it('5.4 → Date header must exist and be valid', () => {
		const date = new Date(res.headers['date']);
		expect(date.toString()).not.to.equal('Invalid Date');
	});

	it('5.5 → CORS must allow all origins', () => {
		expect(res.headers['access-control-allow-origin']).to.equal('*');
	});

	it('5.6 → Security headers must exist', () => {
		expect(res.headers).to.have.property('x-frame-options');
		expect(res.headers).to.have.property('x-content-type-options');
		expect(res.headers).to.have.property('x-xss-protection');
	});
});
