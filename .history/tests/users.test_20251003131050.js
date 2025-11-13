import { expect } from 'chai';
import 'dotenv/config';
import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2');
const TOKEN = process.env.GOREST_TOKEN;

describe('GoREST Users API - CRUD', function () {
	this.timeout(15000);

	let userId; // сюда сохраним id созданного юзера

	// CREATE
	it('POST /users → should create a new user', function (done) {
		const newUser = {
			name: 'Test User CRUD',
			gender: 'male',
			email: `test${Date.now()}@gmail.com`, // уникальный email
			status: 'active',
		};
		request
			.post('/users')
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.send(newUser)
			.end((err, res) => {
				if (err) return done(err);

				try {
					expect(res.status).to.equal(201);
					expect(res.body).to.have.property('id');
					expect(res.body).to.include({
						name: newUser.name,
						gender: newUser.gender,
						status: newUser.status,
					});
					console.log(`headers is Array: ${typeof res.headers}`);
					console.log(`Body is object: ${typeof res.body}`);
					//console.log('Create newUser:', newUser);

					userId = res.body.id; // сохраним ID для следующих тестов
					console.log('Created user ID:', userId);

					done();
				} catch (e) {
					done(e);
				}
			});
	});

	// READ
	it('GET /users/:id → should return created user', function (done) {
		request
			.get(`/users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err) return done(err);
				console.log(res.body.email);
				try {
					expect(res.status).to.equal(200);
					expect(res.body).to.have.property('id', userId);
					expect(res.body).to.have.property('name');
					expect(res.body).to.have.property('email');
					done();
				} catch (e) {
					done(e);
				}
			});
	});
	it('should return valid gmail emails', function (done) {
		request
			.get('/users')
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err) return done(err);

				expect(res.status).to.equal(200);
				expect(res.body).to.be.an('array').that.is.not.empty;

				res.body.forEach(user => {
					// 1. поле есть
					expect(user.email).to.exist;
					expect(user.email).to.be.a('string').and.not.empty;

					// 2. есть @
					expect(user.email).to.include('@');

					// 3. заканчивается на gmail
					expect(user.email.toLowerCase()).to.match(/@gmail\.com$/);

					// 4. общий формат
					expect(user.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

					// 5. строгий gmail формат
					expect(user.email).to.match(/^[A-Za-z0-9._%+-]+@gmail\.com$/);
				});

				// 6. проверка уникальности email'ов
				const emails = res.body.map(user => user.email);
				const uniqueEmails = new Set(emails);
				expect(uniqueEmails.size).to.equal(emails.length);

				done();
			});
	});
	// UPDATE
	it('PUT /users/:id → should update user name', function (done) {
		const updatedUser = { name: 'Updated CRUD User' };

		request
			.put(`/users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.send(updatedUser)
			.end((err, res) => {
				if (err) return done(err);

				try {
					expect(res.status).to.equal(200);
					expect(res.body).to.have.property('id', userId);
					expect(res.body).to.have.property('name', updatedUser.name);

					done();
				} catch (e) {
					done(e);
				}
			});
	});

	// DELETE
	it('DELETE /users/:id → should delete user', function (done) {
		request
			.delete(`/users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err) return done(err);

				try {
					expect(res.status).to.equal(204); // успешное удаление
					done();
				} catch (e) {
					done(e);
				}
			});
	});

	// CHECK DELETE (READ again)
	it('GET /users/:id → should return 404 after delete', function (done) {
		request
			.get(`/users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				try {
					expect(res.status).to.equal(404);
					done();
				} catch (e) {
					done(e);
				}
			});
	});
});
