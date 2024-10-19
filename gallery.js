let currentIndex = 0;

// Function to show the next image
function slideRight() {
    const gallery = document.getElementById('gallery-content');
    const totalItems = gallery.children.length;
    const itemsPerSlide = window.innerWidth <= 768 ? 1 : 3; // 1 image per slide on small screens, 3 on large
    const maxIndex = totalItems - itemsPerSlide;

    // Move to the next image, but do not exceed the maxIndex
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first image when reaching the end
    }

    const percentage = (currentIndex * (100 / itemsPerSlide)); // Calculate translate percentage
    gallery.style.transform = `translateX(-${percentage}%)`; // Slide to the next image
}

// Function to show the previous image
function slideLeft() {
    const gallery = document.getElementById('gallery-content');
    const totalItems = gallery.children.length;
    const itemsPerSlide = window.innerWidth <= 768 ? 1 : 3; // 1 image per slide on small screens, 3 on large
    const maxIndex = totalItems - itemsPerSlide;

    // Move to the previous image, but do not go below index 0
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex; // Go to the last image when clicking the left arrow on the first image
    }

    const percentage = (currentIndex * (100 / itemsPerSlide)); // Calculate translate percentage
    gallery.style.transform = `translateX(-${percentage}%)`; // Slide to the previous image
}

// Function to handle click on images for mobile (toggle caption visibility)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all other items
        galleryItems.forEach(i => i.classList.remove('active'));
        
        // Toggle the 'active' class on the clicked item
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

