function toggleExpand(button){
  const projectContent = button.closest('.project-content');
  projectContent.classList.toggle('expanded');
  if(projectContent.classList.contains('expanded')){
    button.textContent = "Show less";
  }else{
    button.textContent = "Shoe more"
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