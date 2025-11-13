import { expect } from 'chai';
import { requestProducts } from '../config/api.js';

describe('Product', function () {
	let resProduct;

	it('1 Get One Product -> 200', async function () {
		resProduct = await requestProducts
			.get('/1')
			.set('Accept', 'application/json');
		console.log('Status:', resProduct.status);
		console.log('Body:', JSON.stringify(resProduct.body, null, 2));

		it("Must be status -> 200",async  function() {
			expect(resProduct.status).
		})
		it('1.1 Include properly values', async function () {
			expect(resProduct.body).to.include({
				id: 1,
				title: 'Essence Mascara Lash Princess',
				price: 9.99,
				discountPercentage: 10.48,
			});
		});
	});
});
