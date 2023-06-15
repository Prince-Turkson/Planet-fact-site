import planetData from './data.js'

let currentIndex = 4; 
let newImage = null;
let firstButtonImage = null;
const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const jupiterDetails = document.getElementById("jupiter-details")
const jupiterImage = document.getElementById("jupiterImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")



secondaryButton.addEventListener('click', function(){
let planetDetails = currentIndex ; 


console.log(planetData[planetDetails])

jupiterDetails.textContent = planetData[planetDetails].structure.content
jupiterImage.src = planetData[planetDetails].images.internal

primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');

secondaryButton.classList.remove('second-button');
secondaryButton.classList.add('first-button') 

thirdButton.classList.remove('second-button');
thirdButton.classList.add('third-button') 


removeNewImage();

console.log(jupiterDetails);
})




thirdButton.addEventListener('click', function(){
    currentIndex 
    let planetDetails = currentIndex ; 

 

  jupiterDetails.textContent = planetData[planetDetails].geology.content;
  jupiterImage.src = planetData[planetDetails ].images.planet;
  if (!newImage) {
    // Create the new image element and set its source
    newImage = document.createElement('img');
    newImage.src = planetData[planetDetails].images.geology;
    newImage.classList.add('new-image');
     // Add a class to the new image for styling purposes
     newImage.style.width = '163px'; // Set the width of the new image
     newImage.style.position = 'relative' 
    //  newImage.style.right = '1rem';
    //  newImage.style.zIndex = '1'
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
    jupiterDetails.textContent = planetData[planetDetails].overview.content;
    jupiterImage.src = planetData[planetDetails].images.planet;

  } 

  function removeNewImage() {
    if (newImage && newImage.parentNode) {
      newImage.parentNode.removeChild(newImage);
      newImage = null;
    }
  }
  


primaryButton.addEventListener('click', function () {
    currentIndex = 4; // Go back to the default page
    updatePageContent();
    removeNewImage();
    firstButtonImage = planetData[currentIndex].images.planet; // Store the first button's image source
  jupiterImage.src = firstButtonImage; // Update the mercuryImage source

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
    
    jupiterDetails.textContent = planetData[planetDetails].structure.content
    jupiterImage.src = planetData[planetDetails].images.internal

    
    primaryButton.classList.remove('first-button');
    primaryButton.classList.add('second-button');

    secondaryButton.classList.remove('second-button');
    secondaryButton.classList.add('first-button') 

    thirdButton.classList.remove('second-button');
    thirdButton.classList.add('third-button') 
  
  
    
    
    
    console.log(jupiterDetails);
    })


    surface.addEventListener('click', function(event){
        event.preventDefault();
        let planetDetails = currentIndex ; 
    
        jupiterDetails.textContent = planetData[planetDetails].geology.content
        jupiterImage.src = planetData[planetDetails].images.geology 
        
        
        primaryButton.classList.remove('first-button');
        primaryButton.classList.add('second-button');
        
        
        secondaryButton.classList.remove('third-button');
        secondaryButton.classList.add('second-button');
        
        
        thirdButton.classList.remove('third-button');
        thirdButton.classList.add('first-button'); 
      
    
   
        
    })






