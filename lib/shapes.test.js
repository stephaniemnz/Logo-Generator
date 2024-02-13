const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    test('Circle should return a string', () => {
        const circle = new Circle('red', 'RHM', 'black');
        expect(circle.render()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="red" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">RHM</text>\n</svg>');
    });
});