document.addEventListener("DOMContentLoaded", function() {
    // Function to automatically slide the slider
    function autoSlide() {
        const sliderContainer = document.querySelector('.slider-container');
        const sliderItems = document.querySelectorAll('.slider-item');
        let currentIndex = 0;

        const slideInterval = setInterval(() => {
            // Move to the next slide
            currentIndex++;
            const newPosition = -currentIndex * sliderItems[0].offsetWidth;
            sliderContainer.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
            sliderContainer.style.transform = `translateX(${newPosition}px)`;

            // If reached the end, immediately jump back to the first photo
            if (currentIndex >= sliderItems.length) {
                setTimeout(() => {
                    sliderContainer.style.transition = 'none'; // Remove transition
                    currentIndex = 0;
                    sliderContainer.style.transform = `translateX(${currentIndex * sliderItems[0].offsetWidth}px)`;
                    setTimeout(() => {
                        sliderContainer.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
                    }, 50); // Delay before re-enabling transition
                }, 500); // Wait for transition to complete before resetting position
            }
        }, 3000); // Change slide every 3 seconds (adjust as needed)

        // Function to stop sliding on mouse hover
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Function to resume sliding on mouse leave
        sliderContainer.addEventListener('mouseleave', () => {
            autoSlide();
        });
    }

    autoSlide(); // Start the auto sliding when the page loads
});
