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
			email: `test_${Date.now()}@mail.com`, // уникальный email
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

					userId = res.body.id; // сохраним ID для следующих тестов
					console.log('Created user ID:', userId);

					done();
				} catch (e) {
					done(e);
				}
			});
		сonsole.log(newUser, 'newUser');
	});

	// READ
	it('GET /users/:id → should return created user', function (done) {
		request
			.get(`/users/${userId}`)
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err) return done(err);

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
