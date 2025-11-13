import { request } from '../config/api.js';

describe('Current user', function () {
	it('Delete user by id', async function () {
		// Declare res before using it
		const res = await request
			.delete('/users/1') // endpoint
			.set('Accept', 'application/json');

		console.log(res.body);
		console.log(res.body); // выводим тело ответа для проверки

		// Проверяем статус ответа
		expect(res.status).to.equal(200);

		// Проверяем, что в ответе есть нужные поля
		expect(res.body).to.have.property('id', 1);
		expect(res.body).to.have.property('isDeleted', true);
	});
});
