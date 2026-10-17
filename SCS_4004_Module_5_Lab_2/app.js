const http = require('http');
const dayjs = require('dayjs');
const {
    getAllStudents,
    getStudentById,
    getStudentsByGrade,
    getAverageAge,
    getGradeDistribution
} = require('./students');

function createServer() {
    return http.createServer((req, res) => {
        if (req.url === '/' && req.method === 'GET') {
            const students = getAllStudents();
            const avgAge = getAverageAge();
            const gradeDistribution = getGradeDistribution();
            const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Student Profiles</title></head>
<body>
  <h1 style="color:#eb3349">Student Profile System</h1>
  <p>Total: ${students.length} · Average age: ${avgAge.toFixed(1)} · Grade A: ${gradeDistribution['A'] || 0}</p>
  <p>Server time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}</p>
  <table>
    ${students.map(s => `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.grade}</td><td>${s.email}</td></tr>`).join('')}
  </table>
</body></html>`;
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
        } else if (req.url === '/api/students' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, data: getAllStudents() }));
        } else if (req.url.match(/\/api\/students\/\d+/) && req.method === 'GET') {
            try {
                const id = parseInt(req.url.split('/')[3]);
                const student = getStudentById(id);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, data: student }));
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: error.message }));
            }
        } else if (req.url.match(/\/api\/students\/grade\/[A-F]/) && req.method === 'GET') {
            const grade = req.url.split('/')[4];
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, data: getStudentsByGrade(grade) }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });
}

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    const server = createServer();
    server.listen(PORT, () => {
        console.log(`Student Profile app running on http://localhost:${PORT}`);
    });
}

module.exports = { createServer };