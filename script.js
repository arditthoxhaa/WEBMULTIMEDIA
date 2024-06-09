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
    document.addEventListener("DOMContentLoaded", function() {
        const characterIcons = document.querySelectorAll('.character-icon');
        const characterSelect = document.getElementById('character');
        const nameInput = document.getElementById('name');
        const form = document.getElementById('character-form');
        
        // Load the sound effect
        const clickSound = new Audio('sound.mp3'); // Adjust the path to your sound file
    
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
                window.location.href = 'index.html';
    
                // Play the click sound
                clickSound.play();
            } else {
                alert('Please choose a character and enter your name.'); // If character or name is missing, show an alert
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Retrieve the selected character's image from local storage
        const selectedCharacter = localStorage.getItem('selectedCharacter');
        let selectedImage = '';
    
        // Set the image path based on the selected character
        switch(selectedCharacter) {
            case 'Character 1':
                selectedImage = 'images/narutopixel.jpg';
                break;
            case 'Character 2':
                selectedImage = 'images/gokupixel.jpg';
                break;
            case 'Character 3':
                selectedImage = 'images/kakashipixel.webp';
                break;
            default:
                // Set a default image if no character is selected
                selectedImage = 'images/default.jpg';
        }
    
        // Display the selected character's image in the navbar
        const selectedCharacterElement = document.getElementById('selected-character');
        selectedCharacterElement.src = selectedImage;
        selectedCharacterElement.style.borderRadius = '40%'; // Make it round
        selectedCharacterElement.style.width = '30px'; // Adjust size as needed
        selectedCharacterElement.style.height = '30px'; // Adjust size as needed
    });
    document.addEventListener("DOMContentLoaded", function() {
    const characterIcon = document.getElementById('selected-character');
    const logoutButton = document.getElementById('logout-button');

    // Function to show the dropdown menu
    function showDropdownMenu() {
        const dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.classList.toggle('show');
    }

    // Event listener for clicking on the character icon
    characterIcon.addEventListener('click', () => {
        // Show the dropdown menu
        showDropdownMenu();
    });

    // Event listener for the logout button
    logoutButton.addEventListener('click', () => {
        // Redirect to the character.html page
        window.location.href = 'character.html';
    });
});

