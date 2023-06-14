import planetData from './data.js'

let currentIndex = 1; 

const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const venusDetails = document.getElementById("venus-details")
const venusImage = document.getElementById("venusImage")
const overview = document.getElementById("overview")
const structure = document.getElementById("structure")
const surface = document.getElementById("surface")


function updatePageContent() {
    let planetDetails = currentIndex;
    venusDetails.textContent = planetData[planetDetails].overview.content;
    venusImage.src = planetData[planetDetails].images.planet;
  }


primaryButton.addEventListener('click', function () {
    currentIndex = 1; // Go back to the default page
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

venusDetails.textContent = planetData[planetDetails].structure.content
venusImage.src = planetData[planetDetails].images.internal

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

    venusDetails.textContent = planetData[planetDetails].geology.content
    venusImage.src = planetData[planetDetails].images.geology
    


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
    
    venusDetails.textContent = planetData[planetDetails].structure.content
    venusImage.src = planetData[planetDetails].images.internal
    
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
    
        venusDetails.textContent = planetData[planetDetails].geology.content
        venusImage.src = planetData[planetDetails].images.geology
        
        primaryButton.classList.remove('first-button');
        primaryButton.classList.add('second-button');
        
        
        secondaryButton.classList.remove('third-button');
        secondaryButton.classList.add('second-button');
        
        
        thirdButton.classList.remove('third-button');
        thirdButton.classList.add('first-button');
    
   
        
    })



