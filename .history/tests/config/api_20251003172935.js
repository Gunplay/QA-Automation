import supertest from 'supertest';

const API_URL = 'https://dummyjson.com/users';
export const request = supertest(API_URL);
