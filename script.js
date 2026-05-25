// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Add Project
document.getElementById("projectForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const desc = e.target[1].value;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <h2>${name}</h2>
        <p>${desc}</p>
    `;

    document.getElementById("projectList").appendChild(div);

    e.target.reset();

    alert("Project Added Successfully 🚀");
});