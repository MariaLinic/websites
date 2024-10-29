// Get references to the button and alert
const showAlertBtn = document.getElementById('showAlertBtn');
const dangerAlert = document.getElementById('dangerAlert');

// Add an event listener to the button
showAlertBtn.addEventListener('click', function() {
    // Show the alert
    dangerAlert.style.display = 'block';
    // Add the 'show' class to trigger the fade-in effect
    dangerAlert.classList.add('show');
});