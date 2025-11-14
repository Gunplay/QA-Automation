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
		expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);

  res.body.forEach(item => {
    expect(item).toHaveProperty('slug');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('url');

    expect(typeof item.slug).toBe('string');
    expect(typeof item.name).toBe('string');
    expect(typeof item.url).toBe('string');
  });
});
