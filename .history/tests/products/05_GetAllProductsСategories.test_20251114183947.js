import { expect } from 'chai';

describe('Get all products categories', () => {
	it('should return all product categories with status 200', async () => {
		const response = await requestProdeucts.get('/categories');
		console.log(response.body);
		expect(response.status).to.equal(200);

		
	});
	it('result should be an array with length greater than 0', async () => {
		const res = await requestProducts.get('/categories');
		expect(res.body).to.be.an('array').that.is.not.empty;
	})
	it('array must include object', async () => {
		const res = await requestProducts.get('/categories');
		
});
