import planetData from './starter-code/data.js'

let currentIndex = 0; 
let newImage = null;
let firstButtonImage = null;
const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const mercuryDetails = document.getElementById("mercury-details")
const mercuryImage = document.getElementById("mercuryImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")



secondaryButton.addEventListener('click', function(){
let planetDetails = currentIndex ; 


console.log(planetData[planetDetails])

mercuryDetails.textContent = planetData[planetDetails].structure.content
mercuryImage.src = planetData[planetDetails].images.internal
console.log(mercuryImage)


primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');

secondaryButton.classList.remove('second-button');
secondaryButton.classList.add('first-button') 

thirdButton.classList.remove('second-button');
thirdButton.classList.add('third-button') 


removeNewImage();

console.log(mercuryDetails);
console.log("hello")

})



thirdButton.addEventListener('click', function(){
    currentIndex 
    let planetDetails = currentIndex ; 

 

  mercuryDetails.textContent = planetData[planetDetails].geology.content;
  mercuryImage.src = planetData[planetDetails ].images.planet;
  if (!newImage) {
    // Create the new image element and set its source
    newImage = document.createElement('img');
    newImage.src = planetData[planetDetails].images.geology;
    newImage.classList.add('new-image');
     // Add a class to the new image for styling purposes
     newImage.style.width = '163px'; // Set the width of the new image
     newImage.style.position = 'relative' 
     newImage.style.left = '4rem';
     newImage.style.bottom = '8rem';
     newImage.style.zIndex = '1';
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
    mercuryDetails.textContent = planetData[planetDetails].overview.content;
    mercuryImage.src = planetData[planetDetails].images.planet;

  } 

  function removeNewImage() {
    if (newImage && newImage.parentNode) {
      newImage.parentNode.removeChild(newImage);
      newImage = null;
    }
  }
  


primaryButton.addEventListener('click', function () {
    currentIndex = 0; // Go back to the default page
    updatePageContent();
    removeNewImage();
    firstButtonImage = planetData[currentIndex].images.planet; // Store the first button's image source
  mercuryImage.src = firstButtonImage; // Update the mercuryImage source

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
    
    mercuryDetails.textContent = planetData[planetDetails].structure.content
    mercuryImage.src = planetData[planetDetails].images.internal

    
    primaryButton.classList.remove('first-button');
    primaryButton.classList.add('second-button');

    secondaryButton.classList.remove('second-button');
    secondaryButton.classList.add('first-button') 

    thirdButton.classList.remove('second-button');
    thirdButton.classList.add('third-button') 
  
  
    
    
    
    console.log(mercuryDetails);
    })


    surface.addEventListener('click', function(event){
        event.preventDefault();
        let planetDetails = currentIndex ; 
    
        mercuryDetails.textContent = planetData[planetDetails].geology.content
        mercuryImage.src = planetData[planetDetails].images.geology 
        
        
        primaryButton.classList.remove('first-button');
        primaryButton.classList.add('second-button');
        
        
        secondaryButton.classList.remove('third-button');
        secondaryButton.classList.add('second-button');
        
        
        thirdButton.classList.remove('third-button');
        thirdButton.classList.add('first-button'); 
      
    
   
        
    })



