// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// city input elements
const cityInput = document.getElementById('city-input');
const cityButton = document.getElementById('city-submit');

// slogan input elements
const citySlogan = document.getElementById('slogan-input-box');
const citySloganButton = document.getElementById('slogan-input-button');

// dropdown elements
const citySelector = document.getElementById('city-select');
const waterSelector = document.getElementById('water-select');
const landscapeSelector = document.getElementById('landscape-select');

// image locations
const imgCityEl = document.getElementById('img-city');
const imgWaterEl = document.getElementById('img-water');
const imgLandscapeEl = document.getElementById('img-landscape');

// postcard display elements
const cityNameLoc = document.getElementById('greeting-cityname');
const sloganLoc = document.getElementById('greeting-slogan');

// change log elements
const changeLog = document.getElementById('change-log-content');
// change log set state
let cityChange = 0;
let waterChange = 0;
let landscapeChange = 0;
// slogan array
let sloganArr = [];

// dropdown events on change
citySelector.addEventListener('change', () => {
    const cityValue = citySelector.value;
    cityChange++;
    imgCityEl.style.backgroundImage = `url("./assets/Reno_city_${cityValue}.png")`;
    displayCountStats();
});

waterSelector.addEventListener('change', () => {
    const waterValue = waterSelector.value;
    waterChange++;
    imgWaterEl.style.backgroundImage = `url("./assets/Truckee_river_${waterValue}.png")`;
    displayCountStats();
    displaySlogans();
});

landscapeSelector.addEventListener('change', () => {
    const landscapeValue = landscapeSelector.value;
    landscapeChange++;
    imgLandscapeEl.style.backgroundImage = `url("./assets/mountain_landscape_${landscapeValue}.png")`;
    displayCountStats();
    displaySlogans();
});
//button events on click
citySloganButton.addEventListener('click', () => {
    const sloganValue = citySlogan.value;
    sloganArr.push(sloganValue);
    displaySlogans();
    
});
cityButton.addEventListener('click', () => {
    displayName();
});
//functions
function displayCountStats() {
    changeLog.textContent = `City: ${cityChange}, Water: ${waterChange}, Landscape: ${landscapeChange}`;
}
function displaySlogans() {
    citySlogan.value = '';
    sloganLoc.textContent = '';
    for (let slogan of sloganArr) {
        const sloganEl = document.createElement('p');
        sloganEl.textContent = slogan;
        sloganEl.classList.add('slogan');
        sloganLoc.append(sloganEl);
    }
}
function displayName() {
    cityNameLoc.textContent = cityInput.value;
    cityInput.value = '';
}
