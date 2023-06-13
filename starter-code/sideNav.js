const sideNavOpen = document.querySelector('.open'); 
const sideContainer = document.querySelector('.side-bar');
const sideNavClose = document.querySelector('.close')




sideNavOpen.addEventListener('click', () => {
  sideContainer.style.display = 'block'; // Display the side nav container
});

sideNavClose.addEventListener('click', () => {
  sideContainer.style.display = 'none'; // Hide the side nav container
});


