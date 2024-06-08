
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Pixi.js Application
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: 300,
        backgroundColor: 0x1099bb,
    });
    document.getElementById('slider-container').appendChild(app.view);

    const images = [
        { src: 'images/aoharuride.jpg', url: 'anime.html' },
        { src: 'images/away.jpg', url: 'https://example.com/away' },
        { src: 'images/demon.jpg', url: 'https://example.com/demon' },
        { src: 'images/dbz.jpg', url: 'https://example.com/dbz' },
        { src: 'images/hxh.jpg', url: 'https://example.com/hxh' },
        { src: 'images/hyouka.jpg', url: 'https://example.com/hyouka' },
        { src: 'images/jjk.jpg', url: 'https://example.com/jjk' },
        { src: 'images/naruto.jpg', url: 'https://example.com/naruto' },
        { src: 'images/one.jpg', url: 'https://example.com/one' },
        { src: 'images/seven.jpg', url: 'https://example.com/seven' },
        { src: 'images/theboy.jpg', url: 'https://example.com/theboy' },
        { src: 'images/titan.jpg', url: 'https://example.com/titan' },
        { src: 'images/tower.jpg', url: 'https://example.com/tower' },
        { src: 'images/yourname.jpg', url: 'https://example.com/yourname' }
    ];

    
    const sliderContainer = new PIXI.Container();
    app.stage.addChild(sliderContainer);

    const textureLoader = PIXI.Loader.shared;
    images.forEach(image => textureLoader.add(image.src, image.src));

    textureLoader.load((loader, resources) => {
        images.forEach((image, index) => {
            const sprite = new PIXI.Sprite(resources[image.src].texture);
            sprite.x = index * 160; // 150px width + 10px margin
            sprite.y = 0;
            sprite.width = 150;
            sprite.height = 225;
            sprite.interactive = true;
            sprite.buttonMode = true;
            sprite.on('pointertap', () => {
                console.log(`Redirecting to ${image.url}`);
                window.location.href = image.url;
            });
            sliderContainer.addChild(sprite);
        });

        const ticker = new PIXI.Ticker();
        ticker.add(() => {
            sliderContainer.x -= 1; // Move left by 1 pixel each frame
            if (sliderContainer.x <= -160 * images.length) {
                sliderContainer.x = 0; // Reset position
            }
        });
        ticker.start();
    });
});

document.querySelectorAll('.anime-preview').forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        }, 1500); // 1500 milliseconds = 1.5 seconds
    });
    
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
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        }, 1500); // 1500 milliseconds = 1.5 seconds
    });
       
    
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Pixi.js Application
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: 500, // Adjust height for the slider
        backgroundAlpha: 0,
    });
    document.getElementById('slider-container').appendChild(app.view);

    const newsData = [
        { image: 'images/news1.jpg', title: 'New Anime Release: Title Here', description: 'Lorem ipsum dolor sit amet...', link: 'news-details.html' },
        { image: 'images/news2.jpg', title: 'Exclusive Interview with Creator', description: 'Lorem ipsum dolor sit amet...', link: 'news-details.html' },
        { image: 'images/news3.jpg', title: 'Upcoming Anime Events', description: 'Lorem ipsum dolor sit amet...', link: 'news-details.html' }
    ];

    const slider = new PIXI.Container();
    app.stage.addChild(slider);

    const loader = new PIXI.Loader();
    newsData.forEach(news => loader.add(news.image, news.image));
    loader.load((loader, resources) => {
        newsData.forEach((news, index) => {
            const sprite = new PIXI.Sprite(resources[news.image].texture);
            sprite.x = index * app.screen.width;
            sprite.width = app.screen.width; // Full width
            sprite.height = app.screen.height; // Full height
            slider.addChild(sprite);

            // Title
            const title = new PIXI.Text(news.title, { fontSize: 24, fill: 'white', fontWeight: 'bold' });
            title.position.set(sprite.x + 20, 20);
            slider.addChild(title);

            // Description
            const description = new PIXI.Text(news.description, { fontSize: 16, fill: 'white' });
            description.position.set(sprite.x + 20, 60);
            slider.addChild(description);

            // Interactive Link
            sprite.interactive = true;
            sprite.buttonMode = true;
            sprite.on('pointertap', () => {
                window.location.href = news.link;
            });
        });
    });

    let currentIndex = 0;
    app.ticker.add(() => {
        slider.x -= 2;
        if (slider.x <= -app.screen.width * (currentIndex + 1)) {
            currentIndex++;
            if (currentIndex >= newsData.length) {
                slider.x = 0;
                currentIndex = 0;
            }
        }
    });

    // Responsive resizing
    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, 500);
        slider.children.forEach((child, index) => {
            child.x = index * window.innerWidth;
            child.width = window.innerWidth;
            child.height = 500;
        });
    });
});

