//header section 
// Load header.html dynamically
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        console.log("hahaha");  
        // Toggle navigation menu for mobile
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.getElementById('nav-links');

        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
         const teamSection = document.getElementById('team'); // Ensure 'team' exists in the current page
                if (teamSection) { // Ensure team section exists before using it
                    teamSection.style.display = 'block'; // Show the Team section
                    teamSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
                     // Close the dropdown after clicking
                } else {
                    // If the team section is not in the current page, load the 'Team.html' page
                    window.location.href = 'Team.html';
                }
            
        
    })
    .catch(error => console.error('Error loading header:', error));

                        
//Gallery 
/*document.addEventListener('DOMContentLoaded', ()=> {
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

/*document.getElementById("myForm").addEventListener("submit", function(e) {
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
});*/

