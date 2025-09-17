const API_URL = 'http://localhost:3000/api';

async function addToWishlist(userId, productId) {
  try {
    const response = await fetch(`${API_URL}/wishlist/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error('Failed to add to wishlist:', error);
    return null;
  }
}

async function getUserWishlist(userId) {
  try {
    const response = await fetch(`${API_URL}/wishlist/${userId}`);
    const data = await response.json();
    console.log('User wishlist:', data.wishlist);
    return data.wishlist;
  } catch (error) {
    console.error('Failed to get wishlist:', error);
    return [];
  }
}


// Example usage
// addToWishlist('user123', 1);
// getUserWishlist('user123');