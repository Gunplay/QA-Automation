import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Product Search', function () {
	let resSearch;

	it('1.1 → Search products by keyword (status 200)', async function () {
		resSearch = await requestProducts
			.get('/search?q=phone')
			.set('Accept', 'application/json');

		console.log('Status:', resSearch.status);
		console.log(
			'body:',
			resSearch.body.products.map(p => p.title)
		);
		expect(resSearch.status).to.equal(200);
	});

	it('1.2 → Response should contain products array', async function () {
		expect(resSearch.body).to.have.property('products').that.is.an('array');
		console.log('Products found:', resSearch.body.products.length);
	});

	it('1.3 → Each product title should contain more then 3 length', function () {
		//const keyword = 'phone';
		resSearch.body.products.forEach(product => {
			expect(product).to.have.property('title');
			expect(product.title).to.be.a('string');
			expect(product.title.length).to.be.above(3);
			
		});
		it('products with index 3 title is Beats Flex Wireless Earphones', function () {
			expect(resSearch.body.products[3].title).to.equal('Beats Flex Wireless Earphones');
		}
	});
});
