// auth.test.js
const { login } = require('./auth');

describe('Login Function', () => {
  
  test('returns true for correct credentials ("admin" and "123")', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('returns false for wrong username', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('returns false for wrong password', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('returns false for empty input fields', () => {
    expect(login('', '')).toBe(false);
  });

});
