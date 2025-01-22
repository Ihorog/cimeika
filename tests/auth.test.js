const request = require('supertest');
const app = require('../src/app');

describe('Auth Endpoints', () => {
    it('POST /auth/login should return a token', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'admin', password: 'password' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    });

    it('GET /auth/verify should return user data', async () => {
        const loginRes = await request(app)
            .post('/api/auth/login')
            .send({ username: 'admin', password: 'password' });
        const token = loginRes.body.token;

        const verifyRes = await request(app)
            .get('/api/auth/verify')
            .set('Authorization', `Bearer ${token}`);
        expect(verifyRes.statusCode).toEqual(200);
        expect(verifyRes.body.user).toBeDefined();
        expect(verifyRes.body.user.username).toEqual('admin');
    });
});
