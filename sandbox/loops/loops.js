// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

/*
const foodsElement = document.querySelector('#favorite-foods');
function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
*/

/*
const foodsElement = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
}   

const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
foodsElement.innerHTML = foodListElements.join('');
*/


/*
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");
*/

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}

function foodsTemplate(food) {
  return `<li>${food}</li>`;
}


function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);