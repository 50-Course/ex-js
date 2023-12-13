const ex = require('../ex');


describe('ex', () => {
    test('Output should pass if input is 1', () => {
        expect(ex(1)).toBe(1);
    });

    test('Output should pass if input is 2', () => {
        expect(ex(2)).toBe(2);
    });

    test('should pass if input is empty', () => {
        expect(ex()).toBe(1);
    });

    test('should not pass if input is not a number', () => {
        expect(ex('a')).toBe('a');
    });
});
