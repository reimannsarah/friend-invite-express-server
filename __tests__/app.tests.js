const fetch = require('node-fetch');

const serverUrl = 'https://friend-invite-express-server-f35149be8b17.herokuapp.com';

// GET /friends
test('GET /friends should return an array of friends', async () => {
  const response = await fetch(`${serverUrl}/friends`);
  const friends = await response.json();
  expect(Array.isArray(friends)).toBe(true);
});

// POST /friends/invite
test('POST /friends/invite should return a success message', async () => {
  const response = await fetch(`${serverUrl}/friends/invite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(['john.doe@example.com', 'jane.doe@example.com']),
  });

  const data = await response.json();
  expect(data).toHaveProperty('message');
});
