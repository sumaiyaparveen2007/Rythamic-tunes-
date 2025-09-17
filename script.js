function addToFavorites(name, imageSrc, songSrc) {
    const list = document.getElementById('favorites-list');
    if (list.querySelector('p')) {
        list.innerHTML = '';
    }

    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h4>${name}</h4>
        <audio controls>
            <source src="${songSrc}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
    list.appendChild(item);
}

function searchSongs() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const songs = document.querySelectorAll('#songs-list .song-card');

    songs.forEach(song => {
        const title = song.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            song.style.display = '';
        } else {
            song.style.display = 'none';
        }
    });
}
