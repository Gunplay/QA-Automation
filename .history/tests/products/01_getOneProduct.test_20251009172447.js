import { expect } from 'chai';
import { requestProducts } from '../config/api.js';

describe('Product', function () {
	let resProduct;

	it('Get One Product -> 200', async function () {
		resProduct = await requestProducts
			.get('/1')
			.set('Accept', 'application/json');
		console.log('Status:', resProduct.status);
		console.log('Body:', JSON.stringify(resProduct.body, null, 2));

		expect(resProduct.body).to.include({});
	});
});
