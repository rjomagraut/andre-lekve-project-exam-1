
const openLink = document.querySelector('.link');
function openTab() {
  const response = await fetch(openLink);
  
  window.open('https://spaceflightnow.com/launch-schedule', '_blank');
}
