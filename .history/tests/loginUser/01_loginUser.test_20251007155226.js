import { request } from '../config/api.js';
import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';

describe('Should be logged user, -> 200', function () {
	this.timeout(10000);
	let user;

	this.beforeAll(async function name(params) {
		res = await request.post('login');
	});
	it('login user', function () {
		user = UserOfDummyJson();
	});
});
