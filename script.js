document.addEventListener('DOMContentLoaded', () => {
    // Initialize Pixi.js Application
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: 300,
        backgroundColor: 0x1099bb,
    });
    document.getElementById('slider-container').appendChild(app.view);

    const images = [
        { src: 'images/aoharuride.jpg'},
        { src: 'images/away.jpg'},
        { src: 'images/demon.jpg'},
        { src: 'images/dbz.jpg'},
        { src: 'images/hxh.jpg'},
        { src: 'images/hyouka.jpg'},
        { src: 'images/jjk.jpg' },
        { src: 'images/naruto.jpg'},
        { src: 'images/one.jpg'},
        { src: 'images/seven.jpg'},
        { src: 'images/theboy.jpg' },
        { src: 'images/titan.jpg'},
        { src: 'images/tower.jpg'},
        { src: 'images/yourname.jpg'}
    ];
    const sliderContainer = new PIXI.Container();
    app.stage.addChild(sliderContainer);

    const textureLoader = PIXI.Loader.shared;

    // Load images
    images.forEach(image => {
        textureLoader.add(image.src, image.src);
    });
    // Start animation when all images are loaded
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

        const ticker = PIXI.Ticker.shared;
        ticker.add(() => {
            sliderContainer.x -= 1; // Move left by 1 pixel each frame
            if (sliderContainer.x <= -160 * images.length) {
                sliderContainer.x = 0; // Reset position
            }
        });
        ticker.start();
    });
});
//pause 
document.querySelectorAll('.anime-preview').forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
    //preloaderi
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
            { title: 'Bleach', category: 'Action', image: 'images/bleach.jpg' },
            { title: 'Deathnote', category: 'Action', image: 'images/deathnote.jpg' },
            { title: 'Haikyu', category: 'Adventure', image: 'images/Haikyu.jpg' },
            { title: 'SpyxFamily', category: 'Comedy', image: 'images/spyxfamily.jpg' },
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
    
    document.addEventListener("DOMContentLoaded", function() {
    const characterIcons = document.querySelectorAll('.character-icon');
    const characterSelect = document.getElementById('character');
    const nameInput = document.getElementById('name');
    const form = document.getElementById('character-form');

    // Load the sound effect
    const clickSound = new Audio('audios/sound.mp3'); // Adjust the path to your sound file
    characterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const selectedCharacter = icon.getAttribute('data-character');
            const selectedImage = icon.getAttribute('data-image'); // Get the image URL
            characterSelect.value = selectedCharacter;
            form.classList.add('active'); // Show the form

            // Hide other character icons
            characterIcons.forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.style.display = 'none';
                }
            });
            // Play the click sound
            clickSound.play();
            // Store the selected character's image URL in local storage
            localStorage.setItem('selectedImage', selectedImage);
        });
    });
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const characterValue = characterSelect.value;
        const nameValue = nameInput.value.trim();
        if (characterValue && nameValue) {
            // Store the selected character's image URL in local storage
            localStorage.setItem('selectedCharacter', characterValue);

            // Proceed with redirection to index.html
            window.location.href = 'about.html';
        } else {
            alert('Please choose a character and enter your name.'); // If character or name is missing, show an alert
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the selected character's image from local storage
    const selectedCharacter = localStorage.getItem("selectedCharacter");
    let selectedImage = "";

    // Set the image path based on the selected character
    switch (selectedCharacter) {
        case "Character 1":
            selectedImage = "images/narutopixel.jpg";
            break;
        case "Character 2":
            selectedImage = "images/gokupixel.jpg";
            break;
        case "Character 3":
            selectedImage = "images/kakashipixel.webp";
            break;
        default:
            // Set a default image if no character is selected
            selectedImage = "images/icon.jpg";
    }

    // Display the selected character's image in the navbar
    const selectedCharacterElement = document.getElementById("selected-character");
    selectedCharacterElement.src = selectedImage;
    selectedCharacterElement.style.borderRadius = "40%"; // Make it round
    selectedCharacterElement.style.width = "30px"; // Adjust size as needed
    selectedCharacterElement.style.height = "30px"; // Adjust size as needed
});

// Initialize PixiJS
let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true, // Ensure transparency
});
document.getElementById("pixi-container").appendChild(app.view);

// Create a container for particles
let particleContainer = new PIXI.Container();
app.stage.addChild(particleContainer);

// Load a particle texture
const particleTexture = PIXI.Texture.from("images/particle.gif"); // Use actual path

// Function to create a burst effect
function createBurst(x, y) {
    for (let i = 0; i < 50; i++) {
        let particle = new PIXI.Sprite(particleTexture);
        particle.x = x;
        particle.y = y;
        particle.alpha = 1;
        particle.anchor.set(0.5);

        // Random direction and speed
        let angle = Math.random() * Math.PI * 2;
        let speed = Math.random() * 5 + 2;
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;

        particleContainer.addChild(particle);

        // Add a tween for particle fade and removal
        app.ticker.add(function (delta) {
            particle.x += particle.vx * delta;
            particle.y += particle.vy * delta;
            particle.alpha -= 0.02 * delta;
            if (particle.alpha <= 0) {
                particleContainer.removeChild(particle);
                particle.destroy();
            }
        });
    }
}
// Add event listener to character icons
document.querySelectorAll(".character-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
        let rect = e.target.getBoundingClientRect();
        createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
});
// Check if the PIXI.Application instance already exists
if (!window.app || !window.app.stage) {
    // Create a new PIXI.Application instance
    const app = new PIXI.Application({ transparent: true });
    // Append the canvas to the container
    document.getElementById("pixi-container").appendChild(app.view);

    // Get all character icons
    const characterIcons = document.querySelectorAll(".character-icon");
    const graphicsArray = [];

    // Create a BlurFilter for the blur effect
    const blurFilter = new PIXI.filters.BlurFilter();

    // Loop through each character icon
    characterIcons.forEach((icon, index) => {
        // Create a graphics object for each icon
        const graphics = new PIXI.Graphics();
        // Position the graphics object to match the icon
        graphics.position.x = icon.offsetLeft;
        graphics.position.y = icon.offsetTop;
        // Make the graphics clickable
        graphics.interactive = true;
        graphics.buttonMode = true;
        // Draw a rectangle with the same size as the icon
        graphics.beginFill(0x000000, 0); // Transparent fill
        graphics.drawRect(0, 0, icon.offsetWidth, icon.offsetHeight);
        graphics.endFill();
        // Add the graphics object to the PIXI stage
        app.stage.addChild(graphics);

        // Add event listeners for hover
        graphics.on("mouseover", () => {
            // Apply blur to other characters
            graphicsArray.forEach((otherGraphics, i) => {
                if (i !== index) {
                    otherGraphics.filters = [blurFilter];
                }
            });
        });

        graphics.on("mouseout", () => {
            // Remove blur from other characters
            graphicsArray.forEach((otherGraphics, i) => {
                otherGraphics.filters = [];
            });
        });

        // Push the graphics object into an array
        graphicsArray.push(graphics);

        // Add event listener for click
        graphics.on("click", () => {
            // Trigger a click event on the corresponding character icon
            icon.click();
        });
    });
    // Store the PIXI.Application instance in the global scope
    window.app = app;
}

document.addEventListener('DOMContentLoaded', function() {
    const backgroundAudio = document.getElementById('background-audio');
    const toggleSoundIcon = document.getElementById('toggle-sound');

    let isPlaying = false;

    toggleSoundIcon.addEventListener('click', function() {
        if (isPlaying) {
            backgroundAudio.pause();
            toggleSoundIcon.classList.remove('fa-volume-up');
            toggleSoundIcon.classList.add('fa-volume-mute');
        } else {
            backgroundAudio.play();
            toggleSoundIcon.classList.remove('fa-volume-mute');
            toggleSoundIcon.classList.add('fa-volume-up');
        }
        isPlaying = !isPlaying;
    });
});
