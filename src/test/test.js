import { health } from '../function.js';

test('health test', () => {
    const obj = {
        name: "Маг",
        health: 90
    }
    const result = health(obj);
    expect(result).toBe('healthy')
});
