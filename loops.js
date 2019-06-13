for (i=0;i<6;i++){
    console.log(Math.random() * 49 +1);
}

for (i=0; i < 6; i++){
    Math.random() * 49 + 1;
}

//our solution

for (i=9; i>-1; i--){
    console.log(i);
}

let favouriteFilms = [
    "Spirited Away",
    "Never Let Me Go",
    "Pan's Labyrinth",
    "Call Me By Your Name",
    "The Handmaiden",
];
favouriteFilms.push("V for Vendetta");
favouriteFilms.push("Dangerous Liaisons");

for (let i = 0; i < favouriteFilms.length; i ++ ) {
    console.log(i[i]);
}
console.log(favouriteFilms)

const filmCheck = (favouriteFilms) => {
    if(favouriteFilms[2] == "Ghostbusters"){
        return "Yey it's ghostbusters";
    }
    else {
        return "booo, we want ghostbuters";
    }
}
console.log(filmCheck(favouriteFilms));