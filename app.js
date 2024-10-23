
// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data to EmailJS
    emailjs.sendForm('service_2bkfhp5', 'template_yxbq943', this)
    .then(function(response) {
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        document.getElementById('responseMessage').innerText = 'Failed to send message. Please try again.';
        console.error('FAILED...', error);
    });
});

