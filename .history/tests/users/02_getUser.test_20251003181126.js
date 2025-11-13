it('2.1 → GET /users/:id should return user', async function () {
	const res = await request
		.get(`/users/${userId}`)
		.set('Accept', 'application/json');

	console.log('Get res user', JSON.stringify(res.body, null, 2));

	expect(res.status).to.equal(200);
	expect(res.body).to.be.an('object');

	// Проверяем основные поля
	expect(res.body).to.include({
		firstName: createdUser.firstName,
		lastName: createdUser.lastName,
		email: createdUser.email,
	});

	// Проверяем наличие id
	expect(res.body).to.have.property('id', userId);

	console.log(`✅ Actual status: ${res.status}, User ID: ${res.body.id}`);
});
