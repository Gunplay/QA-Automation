it('2.1 → GET /users/:id should return user', async function () {
	const res = await request
		.get(`/users/${userId}`)
		.set('Accept', 'application/json');

	console.log('Created User ID:', userId);
	console.log('Status:', res.status);
	console.log('Body:', JSON.stringify(res.body, null, 2));

	expect(res.status).to.equal(200);
	expect(res.body).to.be.an('object');

	expect(res.body).to.include({
		firstName: createdUser.firstName,
		lastName: createdUser.lastName,
		email: createdUser.email,
	});

	expect(res.body).to.have.property('id', userId);
});
