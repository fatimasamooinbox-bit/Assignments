
function getStudentData(id) {
    return new Promise(function (resolve, reject) {
        console.log("Loading Student " + id + "...");

        setTimeout(function () {
            const students = {
                1: { name: "Ali", cgpa: 3.2 },
                2: { name: "Sara", cgpa: 3.6 },
                3: { name: "Ahmed", cgpa: 3.4 }
            };

            if (students[id]) {
                resolve(students[id]);
            } else {
                reject(new Error("Student not found."));
            }
        }, 2000);
    });
}

async function loadStudents() {
    try {
        const student1 = await getStudentData(1);
        console.log("Student 1:", student1);

        const student2 = await getStudentData(2);
        console.log("Student 2:", student2);

        const student3 = await getStudentData(3);
        console.log("Student 3:", student3);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadStudents();


