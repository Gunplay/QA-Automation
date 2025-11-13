import { request } from '../config/api.js';

describe('Current user', function () {
	it('Delete user by id', async function () {
		// Declare res before using it
		const res = await request
			.delete('/users/1') // endpoint
			.set('Accept', 'application/json');

		console.log(res.body);
	});
});
