import { expect } from 'chai';
import { request } from '../config/api.js';
import { generateUser } from '../helpers/generateUser.js';

describe('Users API - Read User', function () {
	this.timeout(10000); // запас времени для сетевых запросов

	let createdUser;
	let userId;

	// Создание пользователя перед тестами
	before(async function () {
		const newUser = generateUser();
		const res = await request
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);

		createdUser = res.body;
		userId = res.body.id;

		expect(res.status).to.equal(201); // проверяем успешное создание
		console.log(res.status, userId);
		expect(createdUser).to.have.property('id').that.is.a('number');
	});

	// Тест получения пользователя по ID
	it('2.1 → GET /users/:id should return user', async function () {
		const res = await request
			.get(`/users/${userId}`)
			.set('Accept', 'application/json');
		console.log(`Get res user ${res.body}`);
		expect(res.status).to.equal(200);
		expect(res.body).to.be.an('object');

		// Проверяем основные поля
		expect(res.body).to.include({
			firstName: createdUser.firstName,
			lastName: createdUser.lastName,
			email: createdUser.email,
		});

		// Проверяем наличие id
		expect(res.body).to.have.property('id', userId);

		console.log(`✅ Actual status: ${res.status}, User ID: ${res.body.id}`);
	});
});
