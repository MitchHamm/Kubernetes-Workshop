require('dotenv').config({ path: '.env.testing' });

const nock = require('nock');
const request = require('supertest');

const app = require('./app');
const verify_signature = require('./middleware').verify_signature;

jest.mock('./middleware');
verify_signature.mockImplementation((req, res, next) => next());

afterEach(() => {
    nock.cleanAll();
});

describe('app', () => {
    describe('GET /', () => {
        it('responds with "Hello World!"', () => {
            return request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!');
        });
    });
});
