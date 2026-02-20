const summary = document.getElementById("summary");

const errorMsg = document.getElementById("errorMsg");

const students = [
    { name : "Landry", score : 16},
    { name : "Miguel", score : 9},
    { name : "Junior", score : 12},
]
const container = document.getElementById("students");

function displayStudents(){
    container.innerHTML = "";

    students.forEach(function(student, index) {
    const div = document.createElement("div");
    div.textContent = student.name + " - " + student.score;

    if (student.score >= 10) {
        div.classList.add("passed");
    } 
    else {
        div.classList.add("failed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click",function(){
        students.splice(index, 1);
        container.innerHTML = "";
        displayStudents();
        toggleEmptyMessage();
    });
    div.appendChild(deleteBtn);
    container.appendChild(div);
}); 

    let total = 0;
    students.forEach(function(student) {
        total += student.score;
    });
    const moyenne = total / students.length;

    const moyennediv = document.createElement("div");
    moyennediv.textContent = "Moyenne : " + moyenne.toFixed(1);
    container.appendChild(moyennediv);

    const passedStudents = students.filter(function(student){
        return student.score >= 10;
    });
    const admisdiv = document.createElement("div");
    admisdiv.textContent = "Admis : " + passedStudents.length;
    container.appendChild(admisdiv);

    toggleEmptyMessage();

    }
    displayStudents();
    toggleEmptyMessage();



    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function() {
        const name = document.getElementById("nameInput").value;
        const score = document.getElementById("scoreInput").value;
        if (name === "" || score === "") {
            errorMsg.textContent = "please fill in all fields";
            errorMsg.style.color = "red";
            return;
        }
        students.push({
            name: name,
            score: Number(score)
        });
        document.getElementById("nameInput").value = "";
        document.getElementById("scoreInput").value = "";
        document.getElementById("nameInput").focus();
        container.innerHTML = "";
        displayStudents();
        toggleEmptyMessage();

    });

    function toggleEmptyMessage() {
        const list = document.getElementById("students")
        const message = document.getElementById("emptyMessage")

        if (students.length === 0) {
            message.style.display = "block";
        }
        else {
            message.style.display = "none"
        }
    }

    