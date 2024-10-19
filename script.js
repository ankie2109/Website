//header section 
fetch('header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data)
            .catch(error => console.error('Error loading header:', error));



document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    // Toggle the menu on click
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close the menu when clicking on a navigation link and navigate to section
    navItems.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});


// Get the elements
const aboutUsLink = document.getElementById('about-us-link');
const dropdownContent = document.querySelector('about-dropdown');
const teamLink = document.getElementById('team-link');
const teamSection = document.getElementById('team');
const aboutSection = document.getElementById('about-us');

// Toggle dropdown on click
aboutUsLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default behavior
  dropdownContent.classList.toggle('show-dropdown'); // Toggle the dropdown visibility
});

// Show the Team section when clicked
teamLink.addEventListener('click', function(event) {
  event.preventDefault();
  teamSection.style.display = 'block'; // Show the Team section
  teamSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
  dropdownContent.classList.remove('show-dropdown'); // Close the dropdown after clicking
});










//Gallery 
document.addEventListener('DOMContentLoaded', ()=> {
    let currentSlideIndex = 0;
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Debugging: Check if the arrows are found
    console.log("Left Arrow:", leftArrow);
    console.log("Right Arrow:", rightArrow);

    // Ensure arrows are not null
    if (!leftArrow || !rightArrow) {
        console.error("Left or Right arrow elements not found!");
        return; // Exit if elements are missing
    }

    // Dynamically calculate items per slide based on screen size
    function getItemsPerSlide() {
        return window.innerWidth <= 768 ? 1 : 4; // 1 item per slide on mobile, 4 on larger screens
    }

    // Recalculate total slides based on items per slide
    function getTotalSlides() {
        const itemsPerSlide = getItemsPerSlide();
        return Math.ceil(galleryItems.length / itemsPerSlide);
    }

    function showSlide(index) {
        const itemsPerSlide = getItemsPerSlide(); // Recalculate items per slide
        const itemWidthPercentage = 100 / itemsPerSlide; // Calculate width based on items per slide
        galleryGrid.style.transform = `translateX(${-index * itemWidthPercentage}%)`;
    }

    // Move to the next slide
    function nextSlide() {
    const totalSlides = getTotalSlides(); // Recalculate total slides
        if (currentSlideIndex < totalSlides - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }
    // Move to the previous slide
    function prevSlide() {
    const totalSlides = getTotalSlides(); // Recalculate total slides
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = totalSlides - 1;
        }
        showSlide(currentSlideIndex);
    }

    // Add event listeners for buttons using JavaScript
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);

    // Recalculate the layout on window resize for responsiveness
    window.addEventListener('resize', () => {
        showSlide(currentSlideIndex); // Maintain the current slide index when resizing
    });
});






// Form Submission 

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Send data to the server via POST request
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

