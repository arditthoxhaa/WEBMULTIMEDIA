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
    
    
