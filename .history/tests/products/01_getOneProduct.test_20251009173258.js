import { expect } from 'chai';
import { requestProducts } from '../config/api.js';

describe('Product', function () {
	let resProduct;

	it('1 → Get One Product', async function () {
		resProduct = await requestProducts
			.get('/1')
			.set('Accept', 'application/json');

		console.log('Status:', resProduct.status);
		console.log('Body:', JSON.stringify(resProduct.body, null, 2));

		// Проверяем, что запрос успешен
		expect(resProduct.status).to.equal(200);

		// Проверяем, что ответ — объект (а не массив)
		expect(resProduct.body).to.be.an('object');

		// Проверяем, что в объекте есть конкретный id = 1
		expect(resProduct.body).to.have.property('id', 1);

		// Дополнительно можно проверить, что есть обязательные поля
		expect(resProduct.body).to.have.property('title').that.is.a('string');
		expect(resProduct.body).to.have.property('price').that.is.a('number');
	});
});
