import { expect } from 'chai';
import { requestUsers } from '../config/api.js';

describe('Current user', function () {
	it('1.3 → Must be logged user with OWN JWT', async function () {
		// Declare res before using it
		const res = await requestUsers
			.get('/me')
			.set('Accept', 'application/json')
			.set(
				'Authorization',
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NTk4NDcxMjQsImV4cCI6MTc1OTg0ODkyNH0.HGZaL_YaNoKjGnfjeS_EJcn0ZnRXh5tThm-2G3mPhAA'
			);

		console.log(res.body);
		expect(res.status).to.equal(200);
		expect(res.body).to.have.property('username').that.is.a('string');
		expect(res.body).to.have.property('email').that.is.a('string');
		expect(res.body).to.have.property('firstName');
		expect(res.body).to.have.property('lastName');
	});
});
