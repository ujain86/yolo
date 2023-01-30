import file from './file.js';

// console.log(file);

let container = document.getElementById('container');

var state = {
    'querySet': file,
    'page': 1,
    'rows': 20,
    'window': 5,
}

buildTable();

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows;
    var trimEnd = trimStart + rows;

    var trimmedData = querySet.slice(trimStart, trimEnd);

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper');

    wrapper.innerHTML = ``;
	// console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2));
    var maxRight = (state.page + Math.floor(state.window / 2));

    if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = state.window;
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1);
        
        if (maxLeft < 1){
        	maxLeft = 1;
        }
        maxRight = pages;
    }
    
    

    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }
    
    let pageClicked = document.querySelectorAll('.page');
    for (var i = 0 ; i < pageClicked.length; i++) {
        pageClicked[i].addEventListener(('click'), function(e) {
            container.innerHTML = "";
            state.page = Number(e.target.value);
            buildTable();
        })
    }

}  


function buildTable() {

    var data = pagination(state.querySet, state.page, state.rows);
    var myList = data.querySet;

    myList.map((item) => {
            let card = container.appendChild(document.createElement('div'));
            card.setAttribute('class', 'list-group-item');
            let img = card.appendChild(document.createElement('div'));
            img.appendChild(document.createElement('img')).setAttribute('src', item.image);
            let right = card.appendChild(document.createElement('div'));
            let h1 = right.appendChild(document.createElement('h6'));
            h1.innerHTML = "<a href=./item.html?id="+item.id+">" + item.name + "</a>"
        });

    pageButtons(data.pages);
}


