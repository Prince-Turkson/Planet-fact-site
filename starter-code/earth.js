import planetData from './data.js'

let currentIndex = 2; 
let newImage = null;
let firstButtonImage = null;
const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const earthDetails = document.getElementById("earth-details")
const earthImage = document.getElementById("earthImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")



secondaryButton.addEventListener('click', function(){
let planetDetails = currentIndex ; 


console.log(planetData[planetDetails])

earthDetails.textContent = planetData[planetDetails].structure.content
earthImage.src = planetData[planetDetails].images.internal

primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');

secondaryButton.classList.remove('second-button');
secondaryButton.classList.add('first-button') 

thirdButton.classList.remove('second-button');
thirdButton.classList.add('third-button') 


removeNewImage();

console.log(earthDetails);
})




thirdButton.addEventListener('click', function() {
  currentIndex;
  let planetDetails = currentIndex;

  earthDetails.textContent = planetData[planetDetails].geology.content;
  earthImage.src = planetData[planetDetails].images.planet;

  if (!newImage) {
    // Create the new image element and set its source
    newImage = document.createElement('img');
    newImage.src = planetData[planetDetails].images.geology;
    newImage.classList.add('new-image'); // Add the 'new-image' class to the element

    // Function to handle image width adjustment
    const adjustImageWidth = function(mediaQuery) {
      if (mediaQuery.matches) {
        newImage.style.width = '5rem'; // Set the width of the new image for tablets
      } else {
        newImage.style.width = '163px';
        
        // Set the width of the new image for desktops
      }
    };

    // Call the function initially to set the width based on the current media query result
    const initialMediaQuery = window.matchMedia('(max-width: 820px)');
    adjustImageWidth(initialMediaQuery);

    // Add event listener for media query changes to adjust the image width dynamically
    initialMediaQuery.addEventListener('change', function(event) {
      adjustImageWidth(event.target);
    });

    // Set initial position and zIndex
    newImage.style.position = 'relative';
    newImage.style.left = '0';
    newImage.style.bottom = '3.5rem';
    newImage.style.zIndex = '1';

    document.querySelector('.solar-image').appendChild(newImage);
  }

  primaryButton.classList.remove('first-button');
  primaryButton.classList.add('second-button');

  secondaryButton.classList.remove('third-button');
  secondaryButton.classList.add('second-button');

  thirdButton.classList.remove('third-button');
  thirdButton.classList.add('first-button');
});


// Function to update the page content based on the current index
function updatePageContent() {
    let planetDetails = currentIndex;
    earthDetails.textContent = planetData[planetDetails].overview.content;
    earthImage.src = planetData[planetDetails].images.planet;

  } 

  function removeNewImage() {
    if (newImage && newImage.parentNode) {
      newImage.parentNode.removeChild(newImage);
      newImage = null;
    }
  }
  


primaryButton.addEventListener('click', function () {
    currentIndex = 2; // Go back to the default page
    updatePageContent();
    removeNewImage();
    firstButtonImage = planetData[currentIndex].images.planet; // Store the first button's image source
  earthImage.src = firstButtonImage; // Update the mercuryImage source

    primaryButton.classList.remove('second-button');
    primaryButton.classList.add('first-button');
  
    secondaryButton.classList.remove('first-button');
    secondaryButton.classList.add('second-button');
  
    thirdButton.classList.remove('third-button');
    thirdButton.classList.add('second-button');

    bigImage.style.display = 'none';
    bigImage.style.width = '400px';
  
  });
  





// Event Listerners for mobile

structure.addEventListener('click', function(event){
    event.preventDefault();
    let planetDetails = currentIndex ; 
    
    
    console.log(planetData[planetDetails])
    
    earthDetails.textContent = planetData[planetDetails].structure.content
    earthImage.src = planetData[planetDetails].images.internal

    
    primaryButton.classList.remove('first-button');
    primaryButton.classList.add('second-button');

    secondaryButton.classList.remove('second-button');
    secondaryButton.classList.add('first-button') 

    thirdButton.classList.remove('second-button');
    thirdButton.classList.add('third-button') 
    overview.style.borderBottom = '0';
    structure.style.borderBottom = '5px solid #6D2ED5';
    surface.style.borderBottom = '0';
    
    
  
    removeNewImage();
    
    
    
    console.log(mercuryDetails);
    })


    surface.addEventListener('click', function(event) {
      event.preventDefault();
      currentIndex;
      let planetDetails = currentIndex;
    
      if (!newImage) {
        // Create the new image element and set its source
        newImage = document.createElement('img');
        newImage.src = planetData[planetDetails].images.geology;
        newImage.classList.add('new-image');
        newImage.style.position = 'relative';
        newImage.style.bottom = '5rem';
    
        document.querySelector('.solar-image').appendChild(newImage);
      }
    
      earthDetails.textContent = planetData[planetDetails].geology.content;
      earthImage.src = planetData[planetDetails].images.planet;
    
      primaryButton.classList.remove('first-button');
      primaryButton.classList.add('second-button');
    
      secondaryButton.classList.remove('third-button');
      secondaryButton.classList.add('second-button');
    
      thirdButton.classList.remove('third-button');
      thirdButton.classList.add('first-button');
    
      overview.style.borderBottom = '0';
      surface.style.borderBottom = '5px solid #6D2ED5';
      structure.style.borderBottom = '0';
    
      // Check if the surface is clicked on a mobile device
      const mobileMediaQuery = window.matchMedia('(max-width: 480px)');
      if (mobileMediaQuery.matches) {
        if (newImage) {
          newImage.style.width = '90px'; // Set the width of the new image to 111px on mobile
        }
      } else {
        if (newImage) {
          newImage.style.width = '163px'; // Set the default width of 163px for larger screens
        }
      }
    });
    




