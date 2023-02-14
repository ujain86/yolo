import file from "./file.js";

let container = document.querySelector('#item-container');

let id;
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    // console.log(`${key}:${value}`);
    id = value;
}

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
                            ' <h5 class="card-title">Adoption Fee: $'+ data.adoptionFee +'</h5>' +
                        '</div>'+
                    '</div> '
