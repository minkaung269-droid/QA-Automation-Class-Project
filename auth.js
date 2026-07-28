// auth.js
function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return true;
  }
  return false;
}

// Export for Jest testing (Node environment check)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
