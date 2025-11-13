import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Sort products', function () {
	let resSearch;
	it('1.1 → Get products sorted by price ascending (status 200)', async function () {
		resSearch = await requestProducts
			.get('/sort?sort=price&order=asc')
			.set('Accept', 'application/json');
	});
});
