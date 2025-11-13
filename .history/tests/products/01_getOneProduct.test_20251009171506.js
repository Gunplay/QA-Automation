import { expect } from 'chai';
import { request } from '../config/api.js';

describe('Product', function () {
	let getOneProduct;

	it('Get One Product -> 200', async function () {
		getOneProduct = await request.get('/1').set('Accept', 'application/json');;
		console.log(getOneProduct.)
	});
});
