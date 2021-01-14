const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Ronan', 23, 'galv.ronan@gmail.com');

    expect(employee.name).toBe('Ronan');
    expect(employee.id).toBe(23);
    expect(employee.email).toBe("galv.ronan@gmail.com");
});

test('gets employee name', () => {
    const employee = new Employee('Ronan', 23, 'galv.ronan@gmail.com');

    expect(employee.getName()).toBe('Ronan');
});

test('get employee id', () => {
    const employee = new Employee('Ronan', 23, 'galv.ronan@gmail.com');

    expect(employee.getId()).toBe(23);
});

test('get employee email', () => {
    const employee = new Employee('Ronan', 23, 'galv.ronan@gmail.com');

    expect(employee.getEmail()).toBe('galv.ronan@gmail.com');
});


test('get employee role', () => {
    const employee = new Employee('Ronan', 23, 'galv.ronan@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});
