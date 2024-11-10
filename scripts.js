// JavaScript for Billboard Advertisement Agency

// Smooth scroll to top functionality
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/hide the back-to-top button
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Newsletter form validation
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailInput = this.querySelector('input[type="email"]');
  const emailValue = emailInput.value.trim();
  
  if (emailValue === '' || !validateEmail(emailValue)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Thank you for subscribing!');
    emailInput.value = ''; // Clear the input field
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq-item h4');
faqItems.forEach(item => {
  item.addEventListener('click', function() {
    const nextElement = this.nextElementSibling;
    if (nextElement.style.display === 'block') {
      nextElement.style.display = 'none';
    } else {
      nextElement.style.display = 'block';
    }
  });
});

// Counter animation for stats section
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Trigger counter animation when stats section is in view
function checkScroll() {
  const statsSection = document.querySelector('.stats');
  const sectionTop = statsSection.offsetTop;
  const sectionHeight = statsSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > sectionTop + sectionHeight / 2) {
    animateCounters();
    window.removeEventListener('scroll', checkScroll); // Ensure animation runs only once
  }
}

window.addEventListener('scroll', checkScroll);
