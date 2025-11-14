import { expect } from 'chai';
import { requestProducts } from '../config/api';

describe('Get all products categories', () => {
	it('should return all product categories with status 200', async () => {
		const response = await requestProdeucts.get('/categories');
		expect(response.status).to.equal(200);
		expect(response.body).to.be.an('array');
		expect(response.body.length).to.be.greaterThan(0);
		expext(response.body).to.include.members([
			'smartphones',
			'laptops',
	}) 