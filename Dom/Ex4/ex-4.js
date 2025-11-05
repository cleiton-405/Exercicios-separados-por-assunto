let listNotes = []

class Student{
    constructor(name, note1, note2, subject){
        this.name = name
        this.note1 = note1
        this.note2 = note2
        this.subject = subject
    }
}

const removePlaceholder = (event) =>{
    // Remove o placeholder do campo quando o foco é dado
    event.target.placeholder = ''
}

const restorePlaceholder = (event) =>{
    // Restaura o placeholder se o campo estiver vazio
    if(!event.target.value){
        event.target.placeholder = getDefaultPlaceholder(event.target.id)
    }
}

// Função para pegar o placeholder padrão com base no ID do campo
const getDefaultPlaceholder = (id) =>{
    switch(id){
        case 'name':
            return 'Enter your name...'
        case 'note1':
            return 'Enter the first note...'
        case 'note2':
            return 'Enter the second note...'
        case 'subject':
            return "Enter the student's subject..."
        default:
            return ''
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
    document.getElementById('subject').value = ''
}

const dataEntry = () =>{
    const nameStudent = document.getElementById('name').value.trim().toLowerCase()
    const note1Student = Number(document.getElementById('note1').value.trim())
    const note2Student = Number(document.getElementById('note2').value.trim())
    const subjectStudent = document.getElementById('subject').value.trim().toLowerCase()

    const student = new Student(nameStudent, note1Student, note2Student, subjectStudent)

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

    if(!student.subject){
        showAlertError(' ❌ Please enter a subject ❌ ')
    }

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]+$/.test(student.subject)){
        showAlertError(` ❌ Enter only names, no numbers or symbols ❌ `)
        return
    }

    let studentsRegistered = listNotes.some(existingStudent => existingStudent.name.toLowerCase().trim() === student.name.toLowerCase().trim() && existingStudent.subject.toLowerCase().trim() === student.subject.toLowerCase().trim())

    if(studentsRegistered){
        showAlertError(` ❌ ${student.name} already registered a subject, enter another name ❌ `)
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
                    <th><strong>Subject</strong></th>
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
                    <td>${student.subject}</td>
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
    document.getElementById('subject').value = student.subject
    document.getElementById('note1').value = student.note1
    document.getElementById('note2').value = student.note2

    document.getElementById('btn').innerText = "Update Student"
    document.getElementById('btn').onclick = () =>{
        updateStudents(student)
    }
}

const updateStudents = (studentUp) =>{
    const student = dataEntry()

    const studentsExisting = listNotes.some(s => s.name.toLowerCase() === student.name.toLowerCase() && s.subject.toLowerCase() === student.subject.toLowerCase() && (s.name !== studentUp.name || s.subject !== studentUp.subject))

    if(studentsExisting){
        showAlertError(` ❌ ${student.name} already registered student a subject ❌ `)
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

    if(!student.subject){
        showAlertError(' ❌ Please enter a subject ❌ ')
        return
    }

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]+$/.test(student.subject)){
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
    studentUp.subject = student.subject

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

const filterTable = () =>{
    if(listNotes.length === 0){
        listContainer.innerHTML = "<p>No students added yet</p>"
        return
    }

    const nameFilter = document.getElementById('name').value.trim().toLowerCase()
    const subjectFilter = document.getElementById('subject').value.trim().toLowerCase()

    const filterStudents = listNotes.filter(student =>{
        const matchesName = nameFilter ? student.name.toLowerCase().includes(nameFilter) : true

        const matchesSubject = subjectFilter ? student.subject.toLowerCase().includes(subjectFilter) : true
        
        return matchesName && matchesSubject
    })

    if(filterStudents.length === 0){
        listContainer.innerHTML = "<p>No students match your filter</p>"
        return
    }
    
    let html = 
        `
            <table>
                <tr>
                    <th><strong>Name</strong></th>
                    <th><strong>Subject</strong></th>
                    <th><strong>Note 1</strong></th>
                    <th><strong>Note 2</strong></th>
                    <th><strong>Total Notes</strong></th>
                    <th><strong>Average</strong></th>
                </tr>
        `

    filterStudents.forEach(student =>{
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
                    <td>${student.subject}</td>
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

    const btn = document.getElementById('btn')
    btn.innerText = "Back to register"
    btn.onclick = () => updateStudents()

}