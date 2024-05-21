// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create a Pixi Application
    const app = new PIXI.Application({
        width: window.innerWidth, 
        height: 300, 
        backgroundColor: 0x1099bb,
    });
    document.getElementById('slider-container').appendChild(app.view);

    // Load images
    const images = [
        'images/aoharuride.jpg',
        'images/away.jpg',
        'images/demon.jpg',
        'images/goku.jpg',
        'images/hxh.jpg',
        'images/hyouka.jpg',
        'images/jjk.jpg',
        'images/naruto.jpg',
        'images/one.jpg',
        'images/seven.jpg',
        'images/theboy.jpg',
        'images/titan.jpg',
        'images/tower.jpg',
        'images/yourname.jpg'
    ];

    // Create a container for the slider
    const sliderContainer = new PIXI.Container();
    app.stage.addChild(sliderContainer);

    // Load images and create sprites
    const textureLoader = PIXI.Loader.shared;
    images.forEach((image) => {
        textureLoader.add(image, image);
    });

    textureLoader.load((loader, resources) => {
        images.forEach((image, index) => {
            const texture = resources[image].texture;
            const sprite = new PIXI.Sprite(texture);
            sprite.x = index * 160; // 150px width + 10px margin
            sprite.y = 0;
            sprite.width = 150;
            sprite.height = 225;
            sliderContainer.addChild(sprite);
        });

        // Set the initial position of the slider
        let ticker = new PIXI.Ticker();
        ticker.add(() => {
            sliderContainer.x -= 1; // Move left by 1 pixel each frame
            if (sliderContainer.x <= -160 * images.length) {
                sliderContainer.x = 0; // Reset position
            }
        });
        ticker.start();
    });
});

// Mouse move effect on background video
document.addEventListener('mousemove', function(e) {
    const video = document.getElementById('background-video');
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate the amount of movement needed based on mouse position
    const moveX = (clientX / innerWidth - 0.5) * 30; // Adjust multiplier for effect intensity
    const moveY = (clientY / innerHeight - 0.5) * 30; // Adjust multiplier for effect intensity

    // Apply the transform to the video
    video.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});

// Show text on featured item click
document.addEventListener('DOMContentLoaded', function() {
    const featuredItems = document.querySelectorAll('.featured-item');

    featuredItems.forEach(item => {
        item.addEventListener('click', () => {
            const textElement = item.querySelector('.featured-text');
            if (textElement) {
                textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const featuredItems = document.querySelectorAll('.featured-item');

    featuredItems.forEach(item => {
        item.addEventListener('click', () => {
            const isShowing = item.classList.contains('show-text');

            // Remove blur and hide text from all items
            featuredItems.forEach(i => {
                i.classList.remove('show-text');
            });

            // If the clicked item was not already showing text, show it and blur the image
            if (!isShowing) {
                item.classList.add('show-text');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const videoElements = document.querySelectorAll('.anime-preview');

    videoElements.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});
