// import supertest from 'supertest';

// const API_URL = 'https://dummyjson.com/users';
// export const request = supertest(API_URL);

import supertest from 'supertest';

export const requestUsers = supertest('https://dummyjson.com/users');
export const requestProducts = supertest('');
