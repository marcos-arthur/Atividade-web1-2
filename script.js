const DEFAULT_STUDENTS =[
    {
        "name": "João Silva",
        "age": "22",
        "course": "Desenvolvimento Web"
    },
    {
        "name": "Maria Oliveira",
        "age": "24",
        "course": "Design Gráfico"
    },
    {
        "name": "Itamir",
        "age": "12",
        "course": "teste"
    },
]

var table = document.getElementById("studentTable");
var form = document.getElementById("studentForm")


function addStudent(student){
    var row = table.insertRow(1);
    
    var nameCell = row.insertCell(0);
    var ageCell = row.insertCell(1);
    var CourseCell = row.insertCell(2);
    
    nameCell.innerHTML = student.name;
    ageCell.innerHTML = student.age;
    CourseCell.innerHTML = student.course;
}

function submitStudentForm(event){
    event.preventDefault();
    const studentData = event.target;

    const newStudent = {
        "name": studentData.children[0].children[1].value.trim(),
        "age": studentData.children[1].children[1].value.trim(),
        "course": studentData.children[2].children[1].value.trim()
    }

    if(!newStudent.name) return;
    else if(!newStudent.age) return;
    else if(!newStudent.course) return;

    addStudent(newStudent);
}

form.addEventListener('submit', submitStudentForm);

window.onload = (event) => {
    
    DEFAULT_STUDENTS.map(student => {
        addStudent(student)
    })
    
    alert("Adicione alunos no formulário no final da página!");
}