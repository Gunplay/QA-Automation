import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Product Search', function () {
	let resSearch;

	it('1.1 → Search products by keyword (status 200)', async function () {
		resSearch = await requestProducts
			.get('/search?q=phone')
			.set('Accept', 'application/json');

		console.log('Status:', resSearch.status);
		expect(resSearch.status).to.equal(200);
	});

	it('1.2 → Response should contain products array', async function () {
		expect(resSearch.body).to.have.property('products').that.is.an('array');
		console.log('Products found:', resSearch.body.products.length);
	});

	it('1.3 → Each product title should contain the search keyword', function () {
		const keyword = 'phone';
		resSearch.body.products.forEach(product => {
			expect(product.title.toLowerCase()).to.include(keyword);
		});
	});
});
