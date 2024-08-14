import './components/index.js';
import dataDummy from './data/dataNotes.js';

const addbox = document.querySelector(".add-box "),
search = document.querySelector(".search-input"),
popupTabel = document.querySelector(".popup-table"),
popupUpdate = popupTabel.querySelector("header p"),
popupcloseTabel = popupTabel.querySelector("header i"),
titletabel = popupTabel.querySelector("input"),
desctabel = popupTabel.querySelector("textarea"),
savebtn  = popupTabel.querySelector("button");

const months = ["January","February","March","April", "May", "Juni", "Juli" , "Agusutus" , "September", "Oktober","November","Desember"];
const notesStorage = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateId;

const notes = dataDummy.getAll();

addbox.addEventListener("click", () => {
    titletabel.focus();
    popupTabel.classList.add("show");
});

popupcloseTabel.addEventListener("click", () => {
    isUpdate = false;
    titletabel.value = "";
    desctabel.value = "";
    savebtn.innerText = "Add Note";
    popupUpdate.innerText = "Add a New Note";
    popupTabel.classList.remove("show");
});

search.addEventListener('cllick', () => {
    const notesearch = document.querySelectorAll('.note');
    const inputsearch = search.value.toUpperCase();
    for (let i = 0; i < notesearch.length; i++ ){
        let card = notesearch[i];
        card.innerHTML.toUpperCase.indexOf(inputsearch) > -1 ? notesearch[i].style.display = '' : notesearch[i].style.display = 'none';
    }

});

function showNotes(){
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {
        let liTag = `   <li class="note">
                            <div class="details">
                                <p>${note.title}</p>
                                <span>${note.body}</span>
                            </div>
                            <div class="bottom">
                                <span>${formatDate(note.createdAt)}</span>
                                <div class="setting">
                                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                    <ul class="menu">
                                        <li onclick="updateNote(${index}, '${note.title}', '${note.body}')" ><i class="uil uil-pen"></i>Edit</li>
                                        <li onclick="deleteNote(${index})" ><i class="uil uil-trash"></i>Delete</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    `;
        addbox.insertAdjacentHTML("afterend",liTag);  
    });
}
showNotes();

function formatDate(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
}

function showMenu(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteNote(noteId){
    let confirmDelete = confirm(" Are you sure you want to delete this note?");
    if(!confirmDelete) return;
    notes.splice(noteId,1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

function updateNote(noteId,title,body){
    isUpdate = true;
    updateId = noteId;
    addbox.click();
    titletabel.value = title;
    desctabel.value = body;
    savebtn.innerText = "Update Note";
    popupUpdate.innerText = "Update a Note";
    console.log(noteId,title,desc);
}

savebtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titletabel.value,
    noteDesc = desctabel.value;


    if(noteTitle || noteDesc ){
        const date = new Date().toISOString();

        let noteInfo = {
        id: `notes-${Math.random().toString(36).substr(2, 9)}`,
        title: noteTitle,
        body: noteDesc,
        createdAt: date,
        archived: false,
        };
        
        console.log(date);

        if(!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        
        localStorage.setItem("notes", JSON.stringify(notes));
        popupcloseTabel.click();
        showNotes();
    }
        window.showMenu = showMenu;
        window.deleteNote = deleteNote;
        window.updateNote = updateNote;

        showNotes();
});
