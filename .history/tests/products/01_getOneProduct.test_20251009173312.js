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

		expect(resProduct.status).to.equal(200);

		expect(resProduct.body).to.be.an('object');

		expect(resProduct.body).to.have.property('id', 1);

		// Дополнительно можно проверить, что есть обязательные поля
		expect(resProduct.body).to.have.property('title').that.is.a('string');
		expect(resProduct.body).to.have.property('price').that.is.a('number');
	});
});
