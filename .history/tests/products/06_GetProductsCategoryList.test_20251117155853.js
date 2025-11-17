// You should the link - https://dummyjson.com/docs/products#products-categories
// and to do test for 06_GetProductsCategoryList.test.js
import { expect } from 'chai';
import { requestProducts } from '../config/api.js';
describe('6 Get products by category', () => {
	let data;
	it('6.1 should return list of categories with status 200', async () => {
		const response = await requestProducts.get('/products/categories');
		console.log(response.body);
		expect(response.status).to.equal(200);
		data = response.body;

		// (
		// 	'/category-list'
		// );
		// expect(response.status).tо.equal(200);
		// const data = await response.json(); // two variables with the same name
	});
	it('6.2 should return categories as an array with length greater than 0', async () => {
		expect(data).to.be.an('array');
		expect(data.length).to.be.greaterThan(0);
	});
	it('6.3 each category should be a string', async () => {
		data.forEach(category => {
			expect(typeof category).to.be.a('string');
		});
	});
});
