
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");

subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let selectedSubjects = [];
    let totalFee = 0;
    let count = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            count++;
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(count + ". " + subjectName);
            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject.");
        return;
    }
    let message =
        "Selected Subjects:<br>" +
        selectedSubjects.join("<br>");

    document.getElementById("resultBox").innerHTML = message;
});
