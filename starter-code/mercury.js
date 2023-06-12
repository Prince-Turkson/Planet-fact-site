import planetData from './data.js'

let currentIndex = 0; 

const secondaryButton = document.querySelector('.second-button') 
const primaryButton = document.querySelector('.first-button')




secondaryButton.addEventListener('click', function(){
let planetDetails = currentIndex ; 


console.log(planetData[planetDetails])
const mercuryDetails = document.getElementById("mercury-details");
const mercuryImage = document.getElementById("mercuryImage")
mercuryDetails.textContent = planetData[planetDetails].structure.content
mercuryImage.src = planetData[planetDetails].images.geology

primaryButton.classList.remove('first-button');
primaryButton.classList.add('second-button');

secondaryButton.classList.remove('second-button');
secondaryButton.classList.add('first-button')

console.log(mercuryDetails);
})



// console.log(planetData[currentIndex]);