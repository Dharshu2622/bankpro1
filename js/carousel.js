let angle = 0; // Initial angle for rotation
const carousel = document.querySelector('.carousel'); // Select the carousel
const carouselItems = document.querySelectorAll('.carousel-item'); // Get all carousel items
const totalItems = carouselItems.length; // Number of items in the carousel
const angleIncrement = 360 / totalItems; // Angle between each item for rotation

// Function to adjust the carousel's rotation and item positioning
function rotateCarousel() {
    angle += angleIncrement; // Increase the angle by the increment for each rotation
    if (angle >= 360) {
        angle = 0; // Reset the angle after a full rotation
    }

    // Apply the rotation to the carousel itself
    carousel.style.transform = `rotateY(${angle}deg)`;

    // Adjust each item's rotation and position to create a 3D effect
    carouselItems.forEach((item, index) => {
        const itemAngle = angleIncrement * index; // Distribute the items evenly around the 3D space
        item.style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`; // Position items in 3D space
    });
}

// Set an interval to rotate the carousel every 3 seconds
setInterval(rotateCarousel, 3000);
