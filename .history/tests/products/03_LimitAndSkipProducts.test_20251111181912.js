import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM
import { Index } from 'selenium-webdriver/bidi'

describe('Limit and skip products', function () {
	it('1.1 → Get products with limit 5 and skip 5 (status 200)', async function () {
		const resLimitSkip = (await requestProducts.get('?limit=5&skip=5&select=title,price')).set('Accept', 'application/json');

		console.log('Status:', resLimitSkip.status);
		console.log(
			'body:',
			resLimitSkip.body.products.map(p, Index 	=> `${Index}: ${p.title} - ${p.price}`		))
		);
		expect(resLimitSkip.status).to.equal(200);
	});
});
