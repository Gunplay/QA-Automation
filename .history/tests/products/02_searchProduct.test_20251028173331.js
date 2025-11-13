import { requestProducts } from '../config/api';

describe('Product Search', function () {
	it('1.1 → Search products by keyword (status 200)', async function () {
		const resSearch = await requestProducts
			.get('/search?q=phone')
			.set('Accept', 'application/json');
	});
});
