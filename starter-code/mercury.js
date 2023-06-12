import planetData from './data.js'

let currentIndex = 0; 

const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')
const thirdButton = document.querySelector('.third-button')
const mercuryDetails = document.getElementById("mercury-details");
const mercuryImage = document.getElementById("mercuryImage")



secondaryButton.addEventListener('click', function(){
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




thirdButton.addEventListener('click', function(){
    currentIndex 
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






// console.log(planetData[currentIndex]);