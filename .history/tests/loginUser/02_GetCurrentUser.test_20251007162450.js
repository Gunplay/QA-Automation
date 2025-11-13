import { request } from '../config/api.js';

describe('Current user', function () {
	it('Must be logged user with OWN JWT', async function () {
		res = await request
			.get('/me')
			.set('Accept', 'application/json')
			.set(
				'Authorization',
				`Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NTk4NDIwNjksImV4cCI6MTc1OTg0Mzg2OX0.Mt_CNDto_Sw4rSobJ1vkr2nLElIq1ff8S71N4PrFKhI'}`
			);
	});
});
