import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('https://dummyjson.com/users');

describe('Users API - Create User', function () {
	this.timeout(10000); // запас по времени для сетевых запросов

	it('POST /users/add → should create a new user successfully', async function () {
		// Данные для нового юзера
		const newUser = {
			firstName: 'Muhammad',
			lastName: 'Ovi',
			age: 25, // реальное значение (250 вызовет ошибку валидации)
			email: `test${Date.now()}@gmail.com`, // уникальный email
		};

		// Делаем запрос
		const res = await request
			.post('/add')
			.set('Accept', 'application/json')
			.send(newUser);
		// const resInJSON = JSON.stringify(res.body);
		//console.log(resInJSON);
		expect(res.status).to.equal(201);

		// Проверка что тело ответа объект
		expect(res.body).to.be.an('object');

		// Проверяем что вернулись основные поля
		expect(res.body).to.include({
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			age: newUser.age,
			email: newUser.email,
		});

		// Проверка что у юзера есть id
		expect(res.body).to.have.property('id').that.is.a('number');

		// Проверка формата email
		expect(res.body.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

		// Лог для отладки
		console.log(`Actual result: ${res.status}, Expected status: 201`);
		//console.log('✅ User created:', res.body);
	});
});
