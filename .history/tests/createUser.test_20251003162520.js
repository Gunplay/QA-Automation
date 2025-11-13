import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('https://dummyjson.com/users');

describe('Users API - Create User', function () {
	this.timeout(10000);

	let res;

	before(async function () {
		const newUser = {
			firstName: 'Muhammad',
			lastName: 'Ovi',
			age: 25,
			email: `test${Date.now()}@gmail.com`,
			address: 'Taiwan',
		};

		res = await request
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
	});

	// === TESTS FOR STATUS ===
	it('Must return status 201', function () {
		expect(res.status).to.equal(201);
	});

	// === TESTS FOR BODY ===
	describe('Response Body', function () {
		it('Should be an object', function () {
			expect(res.body).to.be.an('object');
		});

		it('Should include sent user data', function () {
			expect(res.body).to.include({
				firstName: res.body.firstName,
				lastName: res.body.lastName,
				age: res.body.age,
				email: res.body.email,
				address: res.body.address,
			});
		});

		it('Should have user id as number', function () {
			expect(res.body).to.have.property('id').that.is.a('number');
		});

		it('Email should match correct format', function () {
			expect(res.body.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		});
	});

	// === TESTS FOR HEADERS ===
	describe('Response Headers', function () {
		it('Content-Type must be application/json', function () {
			expect(res.headers['content-type']).to.include('application/json');
		});

		it('Server header must exist', function () {
			expect(res.headers).to.have.property('server');
		});

		it('Response must include content-length', function () {
			expect(res.headers).to.have.property('content-length');
			expect(Number(res.headers['content-length'])).to.be.greaterThan(0);
		});

		it('Response must include date header in valid format', function () {
			expect(res.headers).to.have.property('date');
			const date = new Date(res.headers['date']);
			expect(date.toString()).not.to.equal('Invalid Date');
		});

		it('Response must allow CORS (Access-Control-Allow-Origin)', function () {
			expect(res.headers).to.have.property('access-control-allow-origin');
			expect(res.headers['access-control-allow-origin']).to.equal('*');
		});
	});
});
