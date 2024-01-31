/* LESSON 3 - Programming Tasks */

const myProfile = {
    name: "Tymur Pushnoy",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Sushi",
        "Noodles",
        "Prawns",
        "Chicken Kiev",
        "Chili Cheese Nuggets"
    ],
    hobbies: [
        "Warhammer 40k",
        "programming",
        "3d modelling",
        "3d printing",
        "games design",
        "gaming",
        "video editing"
    ],
    placesLived: [

    ]
};



myProfile.placesLived.push(
    {
        place: "Donetsk, Ukraine",
        length: "0.5 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Kiev, Ukraine",
        length: "7.5 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Putte, Belgium",
        length: "7 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Raunds, England",
        length: "3 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Warsaw, Poland",
        length: "0.5 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Kruisem, Belgium",
        length: "1.5 years"
    }
)



document.querySelector("#name").textContent = myProfile.name;
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

myProfile.placesLived.forEach(placeLived => {

    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;

    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});