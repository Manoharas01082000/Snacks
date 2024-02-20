// script.js
document.addEventListener('DOMContentLoaded ', function() {
    const userProfileIcon = document.querySelector('.user-profile a');
    userProfileIcon.addEventListener('click', function(event) {
      event.preventDefault();
      window.open('user-profile.html', '_blank');
    });

    // Other JavaScript functionality for your main page
  });

