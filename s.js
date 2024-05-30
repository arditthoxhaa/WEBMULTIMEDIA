document.addEventListener('DOMContentLoaded', () => {
    const animeData = [
        { title: 'Spirited Away', category: 'Adventure', image: 'images/away.jpg' },
        { title: 'Ao Haru Ride', category: 'Adventure', image: 'images/aoharuride.jpg' },
        { title: 'Demon Slayer', category: 'Action', image: 'images/demon.jpg' },
        { title: 'Dragon Ball: Z', category: 'Action', image: 'images/dbz.jpg' },
        { title: 'Hunter x Hunter', category: 'Action', image: 'images/hxh.jpg' },
        { title: 'Hyouka', category: 'Comedy', image: 'images/hyouka.jpg' },
        { title: 'Jujutsu Kaisen', category: 'Action', image: 'images/jjk.jpg' },
        { title: 'Naruto', category: 'Action', image: 'images/naruto.jpg' },
        { title: 'One Piece', category: 'Action', image: 'images/one.jpg' },
        { title: 'Seven Dead', category: 'Action', image: 'images/seven.jpg' },
        { title: 'The Boy And The Heron', category: 'Adventure', image: 'images/theboy.jpg' },
        { title: 'Tower of God', category: 'Action', image: 'images/tower.jpg' },
        { title: 'Bleach', category: 'Action', image: 'images/bleach.png' },
        { title: 'Deathnote', category: 'Action', image: 'images/deathnote.png' },
        { title: 'Haikyu', category: 'Adventure', image: 'images/Haikyu.png' },
        { title: 'SpyxFamily', category: 'Comedy', image: 'images/spyxfamily.png' },
        { title: 'ReZero', category: 'Comedy', image: 'images/rezero.jpg' },
        { title: 'PerfectBlue', category: 'Comedy', image: 'images/perfectblue.jpg' },
    ];

    const categoryButtons = document.querySelectorAll('.category-button');
    const animeGrid = document.querySelector('.anime-grid');

    function displayAnimes(animes) {
        animeGrid.innerHTML = ''; // Clear existing content
        animes.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.classList.add('anime-card');
            animeCard.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <div class="anime-info">
                    <div class="tags">
                        <div class="tag">HD</div>
                        <div class="tag">SUB</div>
                        <div class="tag">Ep 8</div>
                    </div>
                    <h3>${anime.title}</h3>
                </div>
            `;
            animeGrid.appendChild(animeCard);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent;
            const filteredAnimes = animeData.filter(anime => anime.category === category || category === 'All');
            displayAnimes(filteredAnimes);
        });
    });

    // Display all animes by default
    displayAnimes(animeData);
});
