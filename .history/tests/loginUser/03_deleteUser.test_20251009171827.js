import { expect } from 'chai';
import supertest from 'supertest';

// const request = supertest('https://dummyjson.com');

describe('Delete user', function () {
	it('1.4 → Delete user by id', async function () {
		const res = await requestUsers
			.delete('/users/1')
			.set('Accept', 'application/json');

		// если тело не распарсилось автоматически
		let body = res.body;
		if (!Object.keys(body).length && res.text) {
			try {
				body = JSON.parse(res.text);
			} catch {
				console.log('Ответ не в формате JSON:', res.text);
			}
		}

		// console.log('Ответ от API:', body);

		// Проверяем статус ответа
		expect(res.status).to.equal(200);

		// DummyJSON возвращает объект удалённого пользователя
		// Пример ответа:
		// {
		//   "id": 1,
		//   "firstName": "Terry",
		//   "lastName": "Medhurst",
		//   "age": 50,
		//   "gender": "male",
		//   "email": "atuny0@sohu.com",
		//   "username": "atuny0",
		//   "deletedOn": "2025-10-07T12:34:56.789Z"
		// }

		// Проверяем, что id есть и равен 1
		expect(body).to.have.property('id', 1);

		// Проверяем, что есть имя и фамилия
		expect(body).to.have.property('firstName').that.is.a('string');
		expect(body).to.have.property('lastName').that.is.a('string');

		// Проверяем, что появилось поле, указывающее на удаление (если есть)
		if (body.deletedOn) {
			expect(new Date(body.deletedOn)).to.be.a('date');
		}
	});
});
