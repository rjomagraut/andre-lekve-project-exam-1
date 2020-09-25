var element = document.getElementById('about');
element.innerHTML = 'Microsite by André';

let counter = 0;

const fadeIn = document.querySelector('.fade-in');

function updateAboutText() {
  fadeIn.innerText =
    'We might not be alive when the first people land on Mars, but one thing is for certain, there is no end to the possibilities.';
}

setTimeout(updateAboutText, 3000);

const changeColour = document.querySelector('.change-colour');

function updateColour() {
  changeColour.style.color = 'black';
  changeColour.style.textTransform = 'uppercase';
}

setTimeout(updateColour, 5000);
