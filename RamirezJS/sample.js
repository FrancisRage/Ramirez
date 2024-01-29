alert("welcome students")
var studentList = [];

    function addStudent() {
        var name = document.getElementById("name").value;
        var year = document.getElementById("year").value;
        var subj = document.getElementById("subj").value;
        var grade = document.getElementById("grade").value;

        var student = { name: name, year: year, subject: subj, grade: grade };
        studentList.push(student);

        displayStudentList();
        resetForm();
    }

    function displayStudentList() {
        var tableBody = document.getElementById("studentListBody");
        tableBody.innerHTML = "";

        for (var i = 0; i < studentList.length; i++) {
            var row = tableBody.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = studentList[i].name;
            cell2.innerHTML = studentList[i].year;
            cell3.innerHTML = studentList[i].subject;
            cell4.innerHTML = studentList[i].grade;
        }
    }

    function resetForm() {
        document.getElementById("studentForm").reset();
    }