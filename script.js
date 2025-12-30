const slides = document.querySelectorAll(".slide");
let current = 0;

/* Initialize */
slides[current].classList.add("active");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 6000);

function animateText(slide) {
  const headline = slide.querySelector('.animated-text');
  const subtext = slide.querySelector('.animated-subtext');
  
  headline.classList.remove('animate');
  subtext.classList.remove('animate');

  // Trigger reflow to restart animation
  void headline.offsetWidth;

  headline.classList.add('animate');
  subtext.classList.add('animate');
}

// Example in your slide interval
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
  animateText(slides[current]);
}, 6000);










  const sections = document.querySelectorAll('.campaign-section');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);



 
  const storyParagraphs = document.querySelectorAll('.story-text');

  function revealStory() {
    const windowHeight = window.innerHeight;
    storyParagraphs.forEach(p => {
      const top = p.getBoundingClientRect().top;
      if (top < windowHeight - 50) {
        p.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealStory);
  window.addEventListener('load', revealStory);




  
const track = document.querySelector('.projects-effect-track');
const cards = Array.from(document.querySelectorAll('.card'));
const dotsContainer = document.querySelector('.projects-effect-dots');
const prevBtn = document.querySelector('.effect-prev');
const nextBtn = document.querySelector('.effect-next');

const cardsPerPage = 4; // 4 cards per page
const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 0;

// Create dots for each page
dotsContainer.innerHTML = ''; // clear any existing dots
for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentPage = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
}

// Function to show cards for current page
function updateSlider() {
  // Hide all cards
  cards.forEach(card => card.style.display = 'none');

  // Show only the cards for current page
  const start = currentPage * cardsPerPage;
  const end = start + cardsPerPage;
  for (let i = start; i < end && i < cards.length; i++) {
    cards[i].style.display = 'block';
  }

  // Update dots
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === currentPage);
  });
}

// Arrow navigation
nextBtn.addEventListener('click', () => {
  currentPage = (currentPage + 1) % totalPages;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  updateSlider();
});

// Auto-play slider every 5 seconds
setInterval(() => {
  currentPage = (currentPage + 1) % totalPages;
  updateSlider();
}, 5000);

// Initialize slider on load
updateSlider();












document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".impact-band");
  const counters = document.querySelectorAll(".impact-count");
  let hasAnimated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
      const duration = 200; // lower = faster

      const update = () => {
        current += target / duration;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
        observer.disconnect(); // run once only
      }
    });
  }, {
    threshold: 0.4 // 40% visible before triggering
  });

  observer.observe(section);

});

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  const inquirySelect = document.getElementById('inquiry'); // The select dropdown
  const otherContainer = document.getElementById('other-container'); // Hidden input container
  const otherInput = document.getElementById('other-input'); // Input inside container

  // Hide the "Other" input container initially
  otherContainer.style.display = 'none';

  // Listen for changes on the select
  inquirySelect.addEventListener('change', () => {
    if (inquirySelect.value === 'Other') {
      otherContainer.style.display = 'block'; // Show input
      otherInput.focus(); // Focus the input automatically
    } else {
      otherContainer.style.display = 'none'; // Hide input
      otherInput.value = ''; // Clear any previous text
    }
  });

});



















form.addEventListener('submit', function(event) {
  event.preventDefault();

  // First email
  emailjs.sendForm('service_0swtbpw', 'template_q06ry3h', this, '964A25oa33Og011aV')
    .then(() => {
      console.log('First email sent');
    }, (error) => {
      console.log('Error sending first email', error);
    });

  // Second email
  emailjs.sendForm('service_1m4x1gp', 'template_q06ry3h', this, '964A25oa33Og011aV')
    .then(() => {
      console.log('Second email sent');
      document.getElementById('success-message').style.display = 'block';
      form.reset();
    }, (error) => {
      console.log('Error sending second email', error);
    });
});


// Show otherInterest input if "Other" is selected
const interestSelect = document.getElementById('interest');
const otherInput = document.getElementById('otherInterest');

interestSelect.addEventListener('change', () => {
  if (interestSelect.value === 'Other') {
    otherInput.style.display = 'block';
    otherInput.required = true;
  } else {
    otherInput.style.display = 'none';
    otherInput.required = false;
  }
});

// Form submission (example using EmailJS or placeholder)
const form = document.getElementById('engagementForm');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Insert EmailJS or form backend here
  // Example:
  // emailjs.sendForm('service_1m4x1gp', 'template_q06ry3h', form)
  //   .then(() => { successMessage.style.display = 'block'; form.reset(); });

  successMessage.style.display = 'block';
  form.reset();
});
