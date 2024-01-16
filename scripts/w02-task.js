/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Tymur Pushnoy"
const currentYear = "2024"
const profilePicture = "images/me.jpg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home picture img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.innerHTML = `<strong>${currentYear}</strong>`
imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ["Sushi", "Noodles", "Prawns", "Chicken Kiev", "Bamischijf, Chili Cheese Nuggets"];
foodElement.innerHTML = `${favoriteFoods}`

let anotherSingleFavoriteFood = "KFC Zinger Tower Burger"
favoriteFoods.push(anotherSingleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`