document.addEventListener('DOMContentLoaded', () => {
    fetch('/discography')
        .then(response => response.json())
        .then(data => {
            const discographyContent = document.getElementById('discographyContent');
            discographyContent.innerHTML = '<h2>Discography</h2>';
            data.forEach(album => {
                discographyContent.innerHTML += `<p>${album.title} - ${album.releaseYear}</p>`;
            });
        })
        .catch(error => console.error('Error fetching discography:', error));

    fetch('/links')
        .then(response => response.json())
        .then(data => {
            const linksContent = document.getElementById('linksContent');
            linksContent.innerHTML = '<h2>Links</h2>';
            Object.keys(data).forEach(category => {
                linksContent.innerHTML += `<h3>${category}</h3>`;
                data[category].forEach(link => {
                    linksContent.innerHTML += `<p>${link}</p>`;
                });
            });
        })
        .catch(error => console.error('Error fetching links:', error));
});
