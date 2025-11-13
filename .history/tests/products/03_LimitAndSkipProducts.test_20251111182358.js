import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Limit and skip products', function () {
	let resLimitSkip;
	it('1.1 → Get products with limit 25 and skip 5 (status 200)', async function () {
		resLimitSkip = await requestProducts
			.get('?limit=25&skip=5&select=title,price')
			.set('Accept', 'application/json');

		console.log('Status:', resLimitSkip.status);
		console.log(
			'body:',
			resLimitSkip.body.products.map(p => `${p.id} - ${p.title} - ${p.price}`)
		);

		expect(resLimitSkip.status).to.equal(200);
	});
});
