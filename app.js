document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();

            // Collect form data
            let formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            try {
                const response = await fetch('http://127.0.0.1:5000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Message sent successfully!");
                } else {
                    alert("Failed to send the message.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while sending the message.");
            }
        });
    } else {
        console.error("Form not found");
    }
});


