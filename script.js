function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}


function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerText = currentTime;
}

setInterval(updateClock, 1000);

updateClock();