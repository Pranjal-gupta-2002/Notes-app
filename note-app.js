// const note = document.querySelector(".note")

const addBtn = document.querySelector('.add')

const notes  = JSON.parse(localStorage.getItem("notes"))
if(notes){
    notes.forEach(note=>{
        addNewNode(note)
    })
}
addBtn.addEventListener('click',()=>{
    addNewNode()
})

function addNewNode(text =""){
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = ` <div class="notes">
    <div class="tools">
        <button class="edit"><img src="edit1.png"></button>
        <button class="delete"><img src="trash1.png" alt=""></button>
    </div>
    <div class="main hidden"></div>
        <textarea></textarea>
    
    </div>`;
    const editBtn = note.querySelector(".edit")
    const deleteBtn = note.querySelector(".delete")


    const main  = note.querySelector('.main')
    const textArea =  note.querySelector('textarea')
     textArea.value = text

    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    deleteBtn.addEventListener('click',()=>{
        note.remove()
    })
    
    textArea.addEventListener('input',(e)=>{
        const {value } = e.target
    
        main.innerHTML = marked.parse(value)
        updateLs()
    })

    document.body.appendChild(note)
    
}

function updateLs(){
    const notesText  = document.querySelectorAll("textarea")

    const notes = []

    notesText.forEach(note=>{
        notes.push(note.value)
    })

    localStorage.setItem('notes',JSON.stringify(notes))
}
