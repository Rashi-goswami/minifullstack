const API = "http://localhost:3000";

// Register
async function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    await fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, skills })
    });

    alert("User Registered!");
}

// Get users
async function getUsers() {
    const res = await fetch(`${API}/users`);
    const data = await res.json();

    const list = document.getElementById('usersList');
    list.innerHTML = "";

    data.forEach(user => {
        const li = document.createElement('li');
        li.innerText = `${user.name} - ${user.skills}`;
        list.appendChild(li);
    });
}

async function findMatches() {
    const skill = document.getElementById('searchSkill').value;

    const res = await fetch(`${API}/match/${skill}`);
    const data = await res.json();

    const list = document.getElementById('matchList');
    list.innerHTML = "";

    data.forEach(user => {
        const li = document.createElement('li');
        li.innerText = `${user.name} - ${user.skills}`;
        list.appendChild(li);
    });
}