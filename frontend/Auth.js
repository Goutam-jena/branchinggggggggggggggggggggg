const API_URL = 'http://localhost:3000/api';

async function signup(username, email, password) {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error('Signup failed:', error);
    return null;
  }
}

async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}

// Example usage
// signup('testuser', 'test@example.com', 'password123');
// login('test@example.com', 'password123');