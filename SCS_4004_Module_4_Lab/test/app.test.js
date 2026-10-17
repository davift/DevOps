const http = require('http');
const { expect } = require('chai');
const { createServer } = require('../app');

describe('Student Profile Web Server', () => {
    let server;
    const PORT = 3001;
    const BASE = `http://localhost:${PORT}`;

    before((done) => {
        server = createServer();
        server.listen(PORT, done);
    });

    after((done) => {
        server.close(done);
    });

    function get(path) {
        return new Promise((resolve, reject) => {
            http.get(BASE + path, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve({ status: res.statusCode, body: data }));
            }).on('error', reject);
        });
    }

    it('GET / should return HTML with status 200', async () => {
        const res = await get('/');
        expect(res.status).to.equal(200);
        expect(res.body).to.include('Student Profile System');
    });

    it('GET /api/students should return JSON with all students', async () => {
        const res = await get('/api/students');
        const json = JSON.parse(res.body);
        expect(res.status).to.equal(200);
        expect(json.success).to.equal(true);
        expect(json.data).to.be.an('array');
    });

    it('GET /api/students/1 should return a single student', async () => {
        const res = await get('/api/students/1');
        const json = JSON.parse(res.body);
        expect(json.data.name).to.equal('John Doe');
    });

    it('GET /api/students/999 should return a 404', async () => {
        const res = await get('/api/students/999');
        expect(res.status).to.equal(404);
    });

    it('GET /api/students/grade/A should return only grade-A students', async () => {
        const res = await get('/api/students/grade/A');
        const json = JSON.parse(res.body);
        json.data.forEach(s => expect(s.grade).to.equal('A'));
    });

    it('GET /nonexistent should return a 404', async () => {
        const res = await get('/nonexistent');
        expect(res.status).to.equal(404);
    });
});