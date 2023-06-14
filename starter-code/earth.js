import planetData from './data.js'

let currentIndex = 2; 

const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const earthDetails = document.getElementById("earth-details")
const earthImage = document.getElementById("earthImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")


function updatePageContent() {
    let planetDetails = currentIndex;
    earthDetails.textContent = planetData[planetDetails].overview.content;
    earthImage.src = planetData[planetDetails].images.planet;
  }


primaryButton.addEventListener('click', function () {
    currentIndex = 2; // Go back to the default page
    updatePageContent();
  
    primaryButton.classList.remove('second-button');
    primaryButton.classList.add('first-button');
  
    secondaryButton.classList.remove('first-button');
    secondaryButton.classList.add('second-button');
  
    thirdButton.classList.remove('third-button');
    thirdButton.classList.add('second-button');
  
  });
  







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



console.log(venusDetails);
})




thirdButton.addEventListener('click', function(){
    currentIndex 
    let planetDetails = currentIndex ; 

    earthDetails.textContent = planetData[planetDetails].geology.content
    earthImage.src = planetData[planetDetails].images.geology
    


primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');


secondaryButton.classList.remove('third-button');
secondaryButton.classList.add('second-button');


thirdButton.classList.remove('third-button');
thirdButton.classList.add('first-button');

    
})





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
  
    
    
    
    console.log(venusDetails);
    })


    surface.addEventListener('click', function(event){
        event.preventDefault();
        let planetDetails = currentIndex ; 
    
        earthDetails.textContent = planetData[planetDetails].geology.content
        earthImage.src = planetData[planetDetails].images.geology
        
        primaryButton.classList.remove('first-button');
        primaryButton.classList.add('second-button');
        
        
        secondaryButton.classList.remove('third-button');
        secondaryButton.classList.add('second-button');
        
        
        thirdButton.classList.remove('third-button');
        thirdButton.classList.add('first-button');
    
   
        
    })



