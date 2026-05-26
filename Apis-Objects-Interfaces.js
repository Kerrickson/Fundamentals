//Objects, Interfaces, and API's

//object contains data and functionality

let dog = {
    name: "Steve",
    color: "Brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log( "Bark!" );
    },
};


// Passing by value, passing by reference
// note-single value variables are bad practice

function x(y) {
    y.num = y.num + 5
    console.log(y);
}

let y={
    name: "Tom" ,
    num: 10,
}
x(y);
console.log(y);