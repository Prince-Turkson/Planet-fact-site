const sideNavOpen = document.querySelector('.open'); 
const sideContainer = document.querySelector('.side-bar');
const sideNavClose = document.querySelector('.close')




sideNavOpen.addEventListener('click', () => {
  sideContainer.style.display = 'block'; 
});

sideNavClose.addEventListener('click', () => {
  sideContainer.style.display = 'none'; 
});


