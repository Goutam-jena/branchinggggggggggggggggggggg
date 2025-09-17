async function searchProducts(query) {
  try {
    const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Search failed.');
    }
    const results = await response.json();
    console.log('Search results:', results);
    return results;
  } catch (error) {
    console.error('Error during search:', error);
    return [];
  }
}

// Example usage
// searchProducts('laptop');