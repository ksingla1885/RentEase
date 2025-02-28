document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("response-message").innerText = "✅ Message Sent Successfully!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response-message").innerText = "❌ Please fill all fields!";
    }
});