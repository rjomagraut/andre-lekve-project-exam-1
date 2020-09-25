const changeColour = document.querySelector('.center-text');

function updateColour() {
  changeColour.style.fontWeight = 'bold';
  changeColour.style.fontFamily = 'arial';
  changeColour.style.textTransform = 'uppercase';
}

setTimeout(updateColour, 5000);
