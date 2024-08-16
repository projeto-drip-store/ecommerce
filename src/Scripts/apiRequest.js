export const apiRequest = async (path, method, body ) => {
  try {
    const response = await fetch(`http://localhost:3000/api${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(` Erro HTTP! ${response.status}`);
    }

    return await response.json();
    
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; 
  };
};
