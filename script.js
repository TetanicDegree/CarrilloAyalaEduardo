const apiKey = 'IOLoaZiZjDP6pUUmjOk8IOlGUE84reuP'; // Reemplaza esto con tu clave de API de Giphy

async function searchGifs() {
    const query = document.getElementById('searchInput').value;
    const container = document.getElementById('gifContainer');

    if (query.trim() === '') {
        container.innerHTML = '<p>Por favor, ingresa una búsqueda.</p>';
        return;
    }

    
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        const gifs = data.data;

        if (gifs.length === 0) {
            container.innerHTML = '<p>No se encontraron GIFs.</p>';
            return;
        }

        container.innerHTML = gifs.map(gif => `
            <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
        `).join('');
    } catch (error) {
        console.error('Error al buscar GIFs:', error);
        container.innerHTML = '<p>Hubo un error al buscar GIFs. Inténtalo de nuevo más tarde.</p>';
    }
}