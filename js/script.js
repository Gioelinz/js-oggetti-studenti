/* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente! */

const studentElement = document.getElementById("student-display");

//! 1 e 2

/*
const student = { nome: "Gioele", cognome: "Runza", eta: 22 };

console.log(student)

// studentElement.innerText = `Nome: ${student.nome} Cognome: ${student.cognome} Età: ${student.eta}`
let text = '';

for (let key in student) {
    text = text + ' ' + student[key];
}

studentElement.innerText = text */

//! 3-4-5

const students = [
    { nome: "Matteo", cognome: "Imbimbo", eta: "25" },
    { nome: "Antonio", cognome: "Nicodemo", eta: "25" },
    { nome: "Pietro", cognome: "Scandola", eta: "25" },

];

const userChoiceName = prompt("Inserisci il nome studente", "Marco").trim();
const userChoiceSurname = prompt("Inserisci il cognome studente", "Leali").trim();
const userChoiceAge = prompt("Inserisci l'età studente", "29").trim();

const userChoice = { nome: userChoiceName, cognome: userChoiceSurname, eta: userChoiceAge };

students.push(userChoice)

console.log(students)


/* console.table(students) */
let studentsText = "";

for (let i = 0; i < students.length; i++) {
    const currentStudent = students[i]

    for (let key in currentStudent) {
        let currentObject = currentStudent[key];
        if (currentObject != currentStudent.eta) {
            studentsText = studentsText + ' ' + currentObject;
        }
    }
}

studentElement.innerText = studentsText;

