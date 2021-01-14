const Engineer = require('../lib/Engineer');


test('creates engineer object', () => {
    const engineer = new Engineer('Ronan', 23, 'galv.ronan@gmail.com', 'galv-ronan');

    expect(engineer.name).toBe('Ronan');
    expect(engineer.id).toBe(23);
    expect(engineer.email).toBe('galv.ronan@gmail.com');
    expect(engineer.github).toBe('galv-ronan');
});

test('get github', () => {
    const engineer = new Engineer('Ronan', 23, 'galv.ronan@gmail.com', 'galv-ronan');

    expect(engineer.getGithub()).toBe('galv-ronan');
});


test('get role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});
