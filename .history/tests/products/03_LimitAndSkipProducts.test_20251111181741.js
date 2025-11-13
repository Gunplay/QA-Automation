import { expect } from 'chai';
import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Limit and skip products', function () {
	it('1.1 → Get products with limit 5 and skip 5 (status 200)', async function () {
		const resLimitSkip = await requestProducts.get()
});
