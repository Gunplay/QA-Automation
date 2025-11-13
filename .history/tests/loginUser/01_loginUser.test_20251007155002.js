import { UserOfDummyJson } from '../helpers/UserOfdummyjson.js';

describe('Should be logged user, -> 200', function () {
	this.timeout(10000);
	let user;
	it('login user', function () {
		user = UserOfDummyJson();
	});
});
