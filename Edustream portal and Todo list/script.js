
// TASK 1: Functions & Reusability

function greetStudent(name) {
    console.log(`Task 1: Running greetStudent for ${name}`);
    return `Welcome ${name}! You are learning JavaScript.`;
}


// TASK 4: DOM Interaction for Greeting

document.getElementById('greetBtn').onclick = function() {
    const input = document.getElementById('studentInput');
    const display = document.getElementById('greetingDisplay');
    
    if (input.value.trim() === "") {
        console.warn("Task 4: Empty input");
        alert("Please enter a name!");
    } else {
        // Requirement: Using Template String and Function Call
        display.innerHTML = `Hello ${input.value}, welcome to the JavaScript class!`;
        console.log("Task 4: UI Updated");
        input.value = ""; 
    }
};


// TASK 2: Enrollment Lab (Array Methods)

let studentRegistry = []; 

function updateRegistryUI() {
    const listUI = document.getElementById('registryList');
    listUI.innerHTML = "";
    studentRegistry.forEach((name, i) => {
        listUI.innerHTML += `<li>${i + 1}. Student: ${name}</li>`;
    });
    console.table(studentRegistry); // Shows array in console
}

function handlePush() {
    const name = document.getElementById('arrayNameInput').value;
    if (name) {
        studentRegistry.push(name); // Task 2: push()
        document.getElementById('arrayNameInput').value = "";
        updateRegistryUI();
    }
}

function handleUnshift() {
    const name = document.getElementById('arrayNameInput').value;
    if (name) {
        studentRegistry.unshift(name); // Task 2: unshift()
        document.getElementById('arrayNameInput').value = "";
        updateRegistryUI();
    }
}

function handlePop() {
    studentRegistry.pop(); // Task 2: pop()
    updateRegistryUI();
}

function handleShift() {
    studentRegistry.shift(); // Task 2: shift()
    updateRegistryUI();
}

// TASK 3: Search using indexOf()

const subjects = ["math", "english", "science", "history", "physics"];

document.getElementById('searchBtn').onclick = function() {
    const query = document.getElementById('subjectInput').value.toLowerCase().trim();
    const result = document.getElementById('searchResult');
    
    // Task 3: indexOf usage
    const index = subjects.indexOf(query);
    console.log(`Task 3: Searching ${query}, found at index: ${index}`);

    if (index !== -1) {
        result.innerHTML = "✅ Subject Found";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Subject Not Found";
        result.style.color = "red";
    }
};

// TASK 5: Mini Project - Todo List

let todoTasks = [];

function renderPlanner() {
    const plannerUI = document.getElementById('todoDisplay');
    plannerUI.innerHTML = "";
    todoTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span> 
                        <button class="btn-danger" style="padding:4px 8px" onclick="deleteSpecific(${index})">Remove</button>`;
        plannerUI.appendChild(li);
    });
    console.log("Task 5: Planner updated", todoTasks);
}

document.getElementById('addTodoBtn').onclick = function() {
    const input = document.getElementById('todoTask');
    if (input.value.trim() === "") {
        alert("Enter task!");
    } else {
        todoTasks.push(input.value); // Requirement: push()
        input.value = "";
        renderPlanner();
    }
};

document.getElementById('popTodoBtn').onclick = function() {
    todoTasks.pop(); // Requirement: pop()
    renderPlanner();
};

function deleteSpecific(index) {
    // Task 5 requirement: Remove task which I want
    todoTasks.splice(index, 1);
    renderPlanner();
}