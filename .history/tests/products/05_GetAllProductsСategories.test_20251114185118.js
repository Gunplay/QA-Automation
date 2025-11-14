import { expect } from 'chai';
import { requestProducts } from '../config/api.js';

describe('5 Get all products categories', () => {
	it('5.1 should return all product categories with status 200', async () => {
		const response = await requestProducts.get('/categories');
		console.log(response.body);
		expect(response.status).to.equal(200);
	});
	it('5.2 result should be an array with length greater than 0', async () => {
		const res = await requestProducts.get('/categories');
		expect(res.body).to.be.an('array').that.is.not.empty;
	});
	it('5.3 Array must include object with properly structure', async () => {
		const res = await requestProducts.get('/categories');
		expect(res.status).to.equal(200);

		expect(Array.isArray(res.body)).to.be.true;

		res.body.forEach(item => {
			console.log(item);
			expect(item).to.be.an('object');
			expect(item).to.have.property('slug').that.is.a('string');
			expect(item).to.have.property('name').that.is.a('string');
			expect(item).to.have.property('url').that.is.a('string');
		});
	});
});
