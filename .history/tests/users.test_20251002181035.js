import { expect } from 'chai';
import 'dotenv/config';
import supertest from 'supertest';

const request = supertest('https://gorest.co.in/public/v2');
const TOKEN = process.env.GOREST_TOKEN;

describe('GoREST Users API', function () {
	this.timeout(10000);

	it('GET /users should return users list', function (done) {
		request
			.get('/users')
			.set('Authorization', `Bearer ${TOKEN}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err) return done(err); // обработка сетевых ошибок

				try {
					// 🔎 Ассерты
					expect(res.status).to.equal(200);
					expect(res.headers['content-type']).to.match(/json/);
					expect(res.body).to.be.an('array');

					if (res.body.length > 0) {
						expect(res.body[0]).to.have.property('id');
						expect(res.body[0]).to.have.property('name');
						expect(res.body[0]).to.have.property('email');
					}

					console.log('Users count:', res.body.length);

					done(); // сигнал Mocha, что тест успешно завершён
				} catch (assertErr) {
					done(assertErr); // если упал какой-то expect
				}
			});
	});
});
