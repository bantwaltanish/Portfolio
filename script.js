const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', function() {
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
});
