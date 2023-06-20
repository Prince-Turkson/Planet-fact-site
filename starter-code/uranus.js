import planetData from './data.js'

let currentIndex = 6; 
let newImage = null;
let firstButtonImage = null;
const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const uranusDetails = document.getElementById("uranus-details")
const uranusImage = document.getElementById("uranusImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")



secondaryButton.addEventListener('click', function(){
let planetDetails = currentIndex ; 


console.log(planetData[planetDetails])

uranusDetails.textContent = planetData[planetDetails].structure.content
uranusImage.src = planetData[planetDetails].images.internal

primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');

secondaryButton.classList.remove('second-button');
secondaryButton.classList.add('first-button') 

thirdButton.classList.remove('second-button');
thirdButton.classList.add('third-button') 


removeNewImage();

console.log(uranusDetails);
})




thirdButton.addEventListener('click', function(){
    currentIndex 
    let planetDetails = currentIndex ; 

 

  uranusDetails.textContent = planetData[planetDetails].geology.content;
  uranusImage.src = planetData[planetDetails ].images.planet;
  if (!newImage) {
    // Create the new image element and set its source
    newImage = document.createElement('img');
    newImage.src = planetData[planetDetails].images.geology;
    newImage.classList.add('new-image');
  
    // Add different styling for tablet view
    if (window.innerWidth <= 768) {
      newImage.style.width = '184px'; // Set the width of the new image for tablets
      newImage.style.left = '0';
      newImage.style.zIndex = '1';
    } else {
      newImage.style.width = '163px'; // Set the width of the new image for desktops
      newImage.style.position = 'relative';
      newImage.style.left = '0';
      newImage.style.bottom = '8rem';
      newImage.style.zIndex = '1';
    }
  
    document.querySelector('.solar-image').appendChild(newImage);
  }
  primaryButton.classList.remove('first-button');
  primaryButton.classList.add('second-button');

  secondaryButton.classList.remove('third-button');
  secondaryButton.classList.add('second-button');

  thirdButton.classList.remove('third-button');
  thirdButton.classList.add('first-button');

    
})


// Function to update the page content based on the current index
function updatePageContent() {
    let planetDetails = currentIndex;
    uranusDetails.textContent = planetData[planetDetails].overview.content;
    uranusImage.src = planetData[planetDetails].images.planet;

  } 

  function removeNewImage() {
    if (newImage && newImage.parentNode) {
      newImage.parentNode.removeChild(newImage);
      newImage = null;
    }
  }
  


primaryButton.addEventListener('click', function () {
    currentIndex = 6; // Go back to the default page
    updatePageContent();
    removeNewImage();
    firstButtonImage = planetData[currentIndex].images.planet; // Store the first button's image source
  uranusImage.src = firstButtonImage; // Update the mercuryImage source

    primaryButton.classList.remove('second-button');
    primaryButton.classList.add('first-button');
  
    secondaryButton.classList.remove('first-button');
    secondaryButton.classList.add('second-button');
  
    thirdButton.classList.remove('third-button');
    thirdButton.classList.add('second-button');

    
  
  });
  





// Event Listerners for mobile

structure.addEventListener('click', function(event){
    event.preventDefault();
    let planetDetails = currentIndex ; 
    
    
    console.log(planetData[planetDetails])
    
    uranusDetails.textContent = planetData[planetDetails].structure.content
    uranusImage.src = planetData[planetDetails].images.internal

    
    primaryButton.classList.remove('first-button');
    primaryButton.classList.add('second-button');

    secondaryButton.classList.remove('second-button');
    secondaryButton.classList.add('first-button') 

    thirdButton.classList.remove('second-button');
    thirdButton.classList.add('third-button') 
  
    overview.style.borderBottom = '0';
    structure.style.borderBottom = '5px solid #1EC1A2';
    surface.style.borderBottom = '0';
    
    removeNewImage();
    
    
    console.log(uranusDetails);
    })


    surface.addEventListener('click', function(event){
        event.preventDefault();
        let planetDetails = currentIndex ; 
    
        uranusDetails.textContent = planetData[planetDetails].geology.content
        uranusImage.src = planetData[planetDetails ].images.planet;
        if (!newImage) {
          // Create the new image element and set its source
          newImage = document.createElement('img');
          newImage.src = planetData[planetDetails].images.geology;
          newImage.classList.add('new-image');
          newImage.style.position = 'relative'
          newImage.style.bottom = '2rem';

          document.querySelector('.solar-image').appendChild(newImage);

        }
        
        primaryButton.classList.remove('first-button');
        primaryButton.classList.add('second-button');
        
        
        secondaryButton.classList.remove('third-button');
        secondaryButton.classList.add('second-button');
        
        
        thirdButton.classList.remove('third-button');
        thirdButton.classList.add('first-button'); 
      
    
        overview.style.borderBottom = '0';
        structure.style.borderBottom = '5px solid #1EC1A2';
        surface.style.borderBottom = '0';
        
        
    })






