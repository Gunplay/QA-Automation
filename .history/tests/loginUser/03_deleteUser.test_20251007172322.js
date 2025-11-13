import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('https://dummyjson.com');

describe('Current user', function () {
	it('1.4 → Delete user by id and verify user is not accessible', async function () {
		// 1️⃣ Удаляем пользователя
		const deleteRes = await request
			.delete('/users/1')
			.set('Accept', 'application/json');

		let body = deleteRes.body;
		if (!Object.keys(body).length && deleteRes.text) {
			try {
				body = JSON.parse(deleteRes.text);
			} catch {
				console.log('Ответ не в формате JSON:', deleteRes.text);
			}
		}

		console.log('Ответ после удаления:', body);

		// Проверяем, что удаление прошло успешно
		expect(deleteRes.status).to.equal(200);
		expect(body).to.have.property('id', 1);
		expect(body).to.have.property('firstName');
		expect(body).to.have.property('lastName');

		// 2️⃣ Проверяем, что пользователь больше не существует
		const getRes = await request
			.get('/users/1')
			.set('Accept', 'application/json');

		let getBody = getRes.body;
		if (!Object.keys(getBody).length && getRes.text) {
			try {
				getBody = JSON.parse(getRes.text);
			} catch {
				console.log('Ответ при повторном запросе:', getRes.text);
			}
		}

		console.log('Ответ при повторном GET /users/1:', getBody);

		// 3️⃣ Проверяем, что пользователь не найден
		// (dummyjson имитирует API, поэтому может вернуть 404 или 400)
		expect(getRes.status).to.be.oneOf([400, 404]);

		// Проверяем сообщение об ошибке (если сервер вернул JSON)
		if (getBody && getBody.message) {
			expect(getBody.message.toLowerCase()).to.include('not found');
		}
	});
});
