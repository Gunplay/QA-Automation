// import { expect } from 'chai';
// import supertest from 'supertest';

// const request = supertest('https://dummyjson.com/users');

// describe('Users API - Create User (Professional Structure)', function () {
// 	this.timeout(10000);

// 	let res; // Ответ API
// 	let newUser; // Данные для создания пользователя

// 	before(async function () {
// 		// ==== 0. Подготовка данных ====
// 		newUser = {
// 			firstName: 'Muhammad',
// 			lastName: 'Ovi',
// 			age: 25,
// 			email: `test${Date.now()}@gmail.com`,
// 			address: 'Taiwan',
// 		};

// 		// ==== 0.1 Выполняем запрос на создание пользователя ====
// 		res = await request
// 			.post('/add')
// 			.set('Accept', 'application/json')
// 			.send(newUser);
// 	});

// 	// ==== 1. STATUS TESTS ====
// 	describe('1. Status', function () {
// 		it('1.1 → Response status must be 201 Created', function () {
// 			expect(res.status).to.equal(201);
// 		});
// 	});

// 	// ==== 2. BODY TESTS ====
// 	describe('2. Response Body', function () {
// 		it('2.1 → Should be an object', function () {
// 			expect(res.body).to.be.an('object');
// 		});

// 		it('2.2 → Should include all sent user data', function () {
// 			expect(res.body).to.include({
// 				firstName: newUser.firstName,
// 				lastName: newUser.lastName,
// 				age: newUser.age,
// 				email: newUser.email,
// 				address: newUser.address,
// 			});
// 		});

// 		it('2.3 → Should have user id as a number', function () {
// 			expect(res.body).to.have.property('id').that.is.a('number');
// 		});

// 		it('2.4 → Email should match valid format', function () {
// 			expect(res.body.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
// 		});

// 		it('2.5 → Age should be a positive number', function () {
// 			expect(res.body.age).to.be.a('number').and.to.be.greaterThan(0);
// 		});
// 	});

// 	// ==== 3. HEADERS TESTS ====
// 	describe('3. Response Headers', function () {
// 		it('3.1 → Content-Type must be application/json', function () {
// 			expect(res.headers['content-type']).to.include('application/json');
// 		});

// 		it('3.2 → Server header must exist', function () {
// 			expect(res.headers).to.have.property('server');
// 		});

// 		it('3.3 → Content-Length must be greater than 0', function () {
// 			expect(res.headers).to.have.property('content-length');
// 			expect(Number(res.headers['content-length'])).to.be.greaterThan(0);
// 		});

// 		it('3.4 → Date header must exist and be valid', function () {
// 			expect(res.headers).to.have.property('date');
// 			const date = new Date(res.headers['date']);
// 			expect(date.toString()).not.to.equal('Invalid Date');
// 		});

// 		it('3.5 → CORS must allow all origins', function () {
// 			expect(res.headers).to.have.property('access-control-allow-origin');
// 			expect(res.headers['access-control-allow-origin']).to.equal('*');
// 		});

// 		it('3.6 → Security headers should exist', function () {
// 			expect(res.headers).to.have.property('x-frame-options');
// 			expect(res.headers).to.have.property('x-content-type-options');
// 			expect(res.headers).to.have.property('x-xss-protection');
// 		});
// 	});
// });
