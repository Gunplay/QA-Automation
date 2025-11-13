import { requestProducts } from '../config/api.js'; // не забудь расширение .js, если ESM

describe('Sort products', function () {
	let resAsc;

	it('1.1 → Get products sorted by price ascending (status 200)', async function () {
		resAsc = await requestProducts
			.get('?sortBy=price&order=asc') // сортируем по price
			.set('Accept', 'application/json');

		console.log('Status:', resAsc.status);
		console.log('→ Products sorted ASC by price:');
		resAsc.body.products.forEach((p, index) => {
			console.log(`${index + 1}. ${p.title} — ${p.price}`);
		});
	});

	// it('1.2 → Products should be sorted by price desc', async function () {
	// 	resSearch = await requestProducts
	// 		.get('?sortBy=title&order=desc')
	// 		.set('Accept', 'application/json');
	// 	console.log('Status:', resSearch.status);
	// });
});
