let listNotes = []

class Student{
    constructor(name, note1, note2){
        this.name = name
        this.note1 = note1
        this.note2 = note2
    }
}

const showAlertSucess = (mensagem) =>{
    const alert = document.getElementById('alert-sucess-id')
    const alertText = document.getElementById('alert-text-sucess')

    alertText.innerText = mensagem
    alert.style.display = 'block'

    setTimeout(() =>{
        closedAlertSucess()
    }, 2500)
}

const closedAlertSucess = () =>{
    document.getElementById("alert-sucess-id").style.display = "none"
}

const showAlertError = (mensagem) =>{
    const alert = document.getElementById('alert-error-id')
    const alertText = document.getElementById('alert-text-error')

    alertText.innerText = mensagem
    alert.style.display = 'block'

    setTimeout(() =>{
        closedAlertError()
    }, 2500)
}

const closedAlertError = () =>{
    document.getElementById("alert-error-id").style.display = "none"
}

const cleanFields = () =>{
    document.getElementById('name').value = ''
    document.getElementById('note1').value = ''
    document.getElementById('note2').value = ''
}

const dataEntry = () =>{
    const nameStudent = document.getElementById('name').value.trim().toLowerCase()
    const note1Student = Number(document.getElementById('note1').value.trim())
    const note2Student = Number(document.getElementById('note2').value.trim())

    const student = new Student(nameStudent, note1Student, note2Student)

    return student
}

const addNotes = () =>{
    const student = dataEntry()

    if(!student.name){
        showAlertError(' ❌ Please enter a name ❌ ')
        return
    }
    
    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]+$/.test(student.name)){
        showAlertError(` ❌ Enter only names, no numbers or symbols ❌ `)
        return
    }

    let studentsRegistered = listNotes.some(existingStudent => existingStudent.name.toLowerCase() === student.name.toLowerCase())

    if(studentsRegistered){
        showAlertError(` ❌ ${student.name} already registered, enter another name ❌ `)
        cleanFields()
        return
    }

    if(isNaN(student.note1) || isNaN(student.note2) || student.note1 <= 0 || student.note1 > 10 || student.note2 <= 0 || student.note2 > 10){
        showAlertError(' ❌ Enter valid notes between 0 and 10 ❌ ')
        return
    }

    listNotes.push(student)

    showAlertSucess(` ✔️ ${student.name} added sucessfully ✔️ `)

    cleanFields()
    updateArrayStudents()
}

const updateArrayStudents = () =>{
    const listContainer = document.getElementsByClassName("list-students")[0]

    if(listNotes.length === 0){
        listContainer.innerHTML = "<p>No students added yet</p>"
        return
    }

    let html = 
        `
            <table>
                <tr>
                    <th><strong>Name</strong></th>
                    <th><strong>Note 1</strong></th>
                    <th><strong>Note 2</strong></th>
                    <th><strong>Total Notes</strong></th>
                    <th><strong>Average</strong></th>
                </tr>
        `

    listNotes.forEach(student =>{
        const totalNotes = student.note1 + student.note2
        const average = totalNotes / 2

        let averageColor = ''

        if(average < 6){
            averageColor = 'background-color: red;'
        }else if(average >= 6 && average < 7){
            averageColor = 'background-color: yellow;'
        }else{
            averageColor = 'background-color: green;'
        }

        html +=
            `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.note1.toFixed(2)}</td>
                    <td>${student.note2.toFixed(2)}</td>
                    <td>${totalNotes.toFixed(2)}</td>
                    <td style="${averageColor}">${average.toFixed(2)}</td>
                    <td>
                    <button class="buttonEditStudent" onclick="editStudent('${student.name}')">✏️</button>
                    </td>
                    <td>
                    <button class="buttonDeleteStudent" onclick="deleteStudent('${student.name}')">❌</button>
                    </td>
                </tr>
            `
    })

    html += `</table>`

    listContainer.innerHTML = html
}

const editStudent = (nameStudent) =>{
    const student = listNotes.find(student => student.name.toLowerCase() === nameStudent.toLowerCase())

    if(!student){
        showAlertError(' ❌ Student not found ❌ ')
        return
    }

    document.getElementById('name').value = student.name
    document.getElementById('note1').value = student.note1
    document.getElementById('note2').value = student.note2

    document.getElementById('btn').innerText = "Update Student"
    document.getElementById('btn').onclick = () =>{
        updateStudents(student)
    }
}

const updateStudents = (studentUp) =>{
    const student = dataEntry()

    const studentsExisting = listNotes.some(s => s.name.toLowerCase() === student.name.toLowerCase() && s !== studentUp)

    if(studentsExisting){
        showAlertError(` ❌ ${student.name} already registered student ❌ `)
        return
    }

    if(!student.name){
        showAlertError(' ❌ Please enter a name ❌ ')
        return
    }

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]+$/.test(student.name)){
        showAlertError(` ❌ Enter only names, no numbers or symbols ❌ `)
        return
    }

    if(isNaN(student.note1) || isNaN(student.note2) || student.note1 < 0 || student.note1 > 10 || student.note2 < 0 || student.note2 > 10){
        showAlertError(' ❌ Enter valid notes between 0 and 10 ❌ ')
        return
    }

    studentUp.name = student.name
    studentUp.note1 = student.note1
    studentUp.note2 = student.note2

    showAlertSucess(` ✔️ ${studentUp.name} added sucessfully✔️ `)

    updateArrayStudents()
    cleanFields()

    document.getElementById('btn').innerText = "Add student"
    document.getElementById('btn').onclick = addNotes
}

const deleteStudent = (name) =>{
    const index = listNotes.findIndex(student => student.name === name)

    listNotes.splice(index, 1)

    showAlertSucess(` ✔️ ${name} deleted successfully✔️ `)
    updateArrayStudents()
}