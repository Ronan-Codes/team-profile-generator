const Manager = require('../lib/Manager');


test('creates manager object', () => {
    const manager = new Manager('Ronan', 23, "galv.ronan@gmail.com", 77);

    expect(manager.name).toBe('Ronan');
    expect(manager.id).toBe(23);
    expect(manager.email).toBe("galv.ronan@gmail.com");
    expect(manager.officeNumber).toBe(77);
});

test('gets the role of manager', () => {
    const manager = new Manager('Ronan', 23, "galv.ronan@gmail.com", 77);

    expect(manager.getRole()).toBe('Manager');
});
