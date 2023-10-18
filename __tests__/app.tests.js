const fetch = require('node-fetch');

const serverUrl = 'https://friend-invite-express-server-f35149be8b17.herokuapp.com';

// GET /friends
test('GET /friends should return an array of friends', async () => {
  const response = await fetch(`${serverUrl}/friends`);
  const friends = await response.json();
  expect(Array.isArray(friends)).toBe(true);
});

