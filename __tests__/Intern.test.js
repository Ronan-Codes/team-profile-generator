const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Ronan', 23, 'galv.ronan@gmail.com', 'University of Florida');

    expect(intern.name).toBe('Ronan');
    expect(intern.id).toBe(23);
    expect(intern.email).toBe('galv.ronan@gmail.com');
    expect(intern.school).toBe('University of Florida');
});

test('gets school', () => {
    const intern = new Intern('Ronan', 23, 'galv.ronan@gmail.com', 'University of Florida');

    expect(intern.getSchool()).toBe('University of Florida');
});

test('gets role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});
