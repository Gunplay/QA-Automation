import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Limit and skip products', function () {
	let resLimitSkip;
	it('1.1 → Get products with limit 5 and skip 5 (status 200)', async function () {
		resLimitSkip = await requestProducts
			.get('?limit=&skip=&select=title,price')
			.set('Accept', 'application/json');

		console.log('Status:', resLimitSkip.status);
		console.log(
			'body:',
			resLimitSkip.body.products.map(p => `${p.id} - ${p.title} - ${p.price}`)
		);

		expect(resLimitSkip.status).to.equal(200);
	});
	it('1.3 → Should have correct total number of products', function () {
		expect(resLimitSkip.body).to.have.property('total');
		console.log('Total products:', resLimitSkip.body.total);
		expect(resLimitSkip.body.total).to.be.a('number').and.to.be.greaterThan(0);
	});
	it('1.4 → total products 125', function () {
		expect(resLimitSkip.body.total).to.equal(125);
});
