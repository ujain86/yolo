import file from "./file.js";

let container = document.querySelector('#item-container');

let id;
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    // console.log(`${key}:${value}`);
    id = value;
}

// console.log('id' , id);
let data;

file.map((item) => {
    if(item.id == id){
        data = item;
    }
});
console.log('data', data);
container.innerHTML = '<div class="card" style="width: 20rem">'+
    '<img class="card-img-top" src=' + data.image +  ' >'+
    '<div class="card-body">'+
   ' <h3 class="card-title">Name: '+ data.name +'</h3>' +
   ' <h5 class="card-title ">Type: '+ data.type +'</h5>' +
   ' <h5 class="card-title">Gender: '+ data.gender +'</h5>' +
   ' <h5 class="card-title">Age: '+ data.age +'</h5>' +
   ' <h5 class="card-title">Description: '+ data.description +'</h5>' +
   ' <h5 class="card-title">Adoption Fee: '+ data.age +'</h5>' +
//    ' <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'+
//     '<a href="#" class="btn btn-primary">Go somewhere</a>'+
    '</div>'+
  '</div> '
//   a. Pet's name
//   b. Animal type (e.g. dog, cat, hamster)
//   c. Animal gender
//   d. Animal age
//   e. Animal description
//   f. Adoption fee (let's go with $199)
