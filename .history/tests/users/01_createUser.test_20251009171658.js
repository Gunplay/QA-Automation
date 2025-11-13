import { expect } from 'chai';
import { requestUsers } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';
import {
	isGmail,
	isNonEmptyString,
	isPositiveNumber,
	isValidEmail,
} from '../helpers/validators.js';

describe('Users API - Create User', function () {
	this.timeout(10000);

	let res;
	let newUser;

	before(async function () {
		newUser = generateUser();
		res = await requestUsers
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
	});

	it('1.0 → Object should not be empty', () => {
		expect(res.body).to.not.be.empty;
	});

	it('1.1 → Status should be 201 Created', () => {
		expect(res.status).to.equal(201);
	});

	it('1.2 → Response body should be an object', () => {
		expect(res.body).to.be.an('object');
	});

	it('1.3 → Response body should match sent user data', () => {
		expect(res.body).to.include(newUser);
	});

	it('1.4 → User ID should exist and be a positive number', () => {
		expect(res.body).to.have.property('id');
		expect(isPositiveNumber(res.body.id)).to.be.true;
	});

	it('1.5 → Email should be valid and a Gmail', () => {
		expect(isValidEmail(res.body.email)).to.be.true;
		expect(isGmail(res.body.email)).to.be.true;
	});

	it('1.6 → Name and address should be non-empty strings', () => {
		expect(isNonEmptyString(res.body.firstName)).to.be.true;
		expect(isNonEmptyString(res.body.lastName)).to.be.true;
		expect(isNonEmptyString(res.body.address)).to.be.true;
	});
});
