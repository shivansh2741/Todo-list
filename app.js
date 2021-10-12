// console.log("this is a server!!")

// If user add any note add it to local Storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = "";
    console.log(notesObj);
    shownotes();
})


// function to show notes
function shownotes() {
    let notes = localStorage.getItem('notes');
    let html = '';
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2"style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id=${index} onclick='deleteNote(this.id)' class="btn btn-primary">Delete note</button>
        </div>
    </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
}

// function to delete
function deleteNote(index) {
    console.log("im deleting");
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();
}

let searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){
    let Inputval=searchTxt.value;
    console.log("input fired!!",Inputval);
})
