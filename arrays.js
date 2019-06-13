let coffeeOrder = [
"Alex - Cortado",
"Ben - Cortado",
"Charlie - Whatever is new"
];
coffeeOrder[1] = "Ann - Vanilla Latte";

console.log(coffeeOrder);

let favouriteSongs = [
    "Song 1 - Helena",
    "Song 2 - Midnight Train to Georgia",
    "Song 3 - King Knight"
];
//favouriteSongs[2] = ["B Side - Georgia on my Mind"]
favouriteSongs.pop();
console.log(favouriteSongs);

let favouriteWebsites = [
    "Website 1 - Reddit",
    "Website 2 - CrunchyRoll",
    "Website 3 - Coursera",
];
favouriteWebsites.push("Website 4 - YouTube"),
favouriteWebsites.push("Website 5 - Kotaku"),
favouriteWebsites.pop();
console.log(favouriteWebsites);

// Research shift() removes top data entry in array , unshift() adds data back to top ,slice(), splice() The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

let testingTheArrayMethods = [
    "Example 1",
    "Example 2",
    "Example 3",
    "Example 4",
    "Example 5",
];
testingTheArrayMethods.shift();
testingTheArrayMethods.unshift("Example1");
testingTheArrayMethods.slice(1,3);
testingTheArrayMethods.splice();
console.log(testingTheArrayMethods);