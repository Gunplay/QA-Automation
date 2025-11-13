import { expect } from 'chai';
import { requestProducts } from '../config/api';
describe('Product', function () {
	let resProduct;

	it('1.1 → Get product by ID (status 200)', async function () {
		resProduct = await requestProducts
			.get('/1')
			.set('Accept', 'application/json');

		console.log('Status:', resProduct.status);
		expect(resProduct.status).to.equal(200);
	});

	it('1.2 → Response should be an object', function () {
		expect(resProduct.body).to.be.an('object');
		console.log('Body type:', typeof resProduct.body);
	});

	it('1.3 → Product should have correct ID', function () {
		expect(resProduct.body).to.have.property('id', '1');
	});

	it('1.4 → Product should contain required fields', function () {
		expect(resProduct.body).to.have.property('id').that.is.a('string');
		expect(resProduct.body).to.have.property('title').that.is.a('string');
		expect(resProduct.body).to.have.property('price').that.is.a('number');
	});
});
