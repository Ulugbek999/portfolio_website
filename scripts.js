
function toggleExpand(button) {
  // Get the closest parent with class 'project-content' (so we only affect the right section)
  const projectContent = button.closest('.project-content');

  // Find the #moreText div inside this specific project
  const moreText = projectContent.querySelector('#moreText');

  // Toggle the 'expanded' class on the .project-content element
  projectContent.classList.toggle('expanded');

  // Check if 'expanded' class is now active
  if (projectContent.classList.contains('expanded')) {
    // If expanded, show the extra text by setting display to block
    moreText.style.display = 'block';

    // Change button text to "Show less"
    button.textContent = 'Show less';
  } else {
    // If not expanded, hide the extra text
    moreText.style.display = 'none';

    // Change button text back to "Show more"
    button.textContent = 'Show more';
  }
}





const phrases = ["Hi! My name is  ", "Welcome to my portfolio website", "Glad you're here!"];
const typedText = document.getElementById("typed-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
      charIndex--;
      typedText.textContent = currentPhrase.substring(0, charIndex);
  } else {
      charIndex++;
      typedText.textContent = currentPhrase.substring(0, charIndex);
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1500; // wait before deleting
      isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; //to capture the next phrase and move to the beginning after the last phrase
      delay = 500; // pause before typing next
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);