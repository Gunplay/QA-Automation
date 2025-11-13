import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Sort products', function () {
	let resSearch;
	it('1.1 → Get products sorted by price ascending (status 200)', async function () {
		resSearch = await requestProducts
			.get('/sort?sort=price&order=asc')
			.set('Accept', 'application/json');
	});

	it('1.2 → Products should be sorted by price desc', async function () {
		resSearch = await requestProducts
			.get('/sort?sort=price&order=desc')
			.set('Accept', 'application/json');
	});
});
