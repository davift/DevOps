const { expect } = require('chai');
const {
    getAllStudents,
    getStudentById,
    getStudentsByGrade,
    getAverageAge,
    getGradeDistribution,
    addStudent,
    isValidEmail,
    validateAllEmails
} = require('../students');

describe('Student Data Layer', () => {

    describe('getAllStudents()', () => {
        it('should return an array of students', () => {
            const students = getAllStudents();
            expect(students).to.be.an('array');
            expect(students.length).to.be.greaterThan(0);
        });
    });

    describe('getStudentById()', () => {
        it('should return the correct student for a valid id', () => {
            const student = getStudentById(1);
            expect(student.name).to.equal('John Doe');
        });

        it('should throw an error for an id that does not exist', () => {
            expect(() => getStudentById(999)).to.throw('Student not found');
        });
    });

    describe('getStudentsByGrade()', () => {
        it('should return only students matching the given grade', () => {
            const gradeA = getStudentsByGrade('A');
            gradeA.forEach(s => expect(s.grade).to.equal('A'));
        });
    });

    describe('getAverageAge()', () => {
        it('should return a positive number', () => {
            expect(getAverageAge()).to.be.a('number');
            expect(getAverageAge()).to.be.greaterThan(0);
        });
    });

    describe('getGradeDistribution()', () => {
        it('should return an object with grade counts', () => {
            const distribution = getGradeDistribution();
            expect(distribution).to.be.an('object');
        });
    });

    describe('addStudent()', () => {
        it('should add a new student with a valid email', () => {
            const before = getAllStudents().length;
            addStudent('Test Student', 20, 'B', 'test@school.com');
            expect(getAllStudents().length).to.equal(before + 1);
        });

        it('should reject an invalid email', () => {
            expect(() => addStudent('Bad Student', 20, 'B', 'not-an-email')).to.throw('Invalid email address');
        });
    });

    describe('isValidEmail()', () => {
        it('should detect the seeded invalid email', () => {
            expect(isValidEmail('invalid-email')).to.equal(false);
        });

        it('should accept a properly formatted email', () => {
            expect(isValidEmail('jane@school.com')).to.equal(true);
        });
    });

    describe('validateAllEmails() — data integrity check', () => {
        it('all students must have valid email addresses', () => {
            const invalid = validateAllEmails();
            expect(invalid).to.have.lengthOf(0, `Found students with invalid emails: ${JSON.stringify(invalid)}`);
        });
    });

});