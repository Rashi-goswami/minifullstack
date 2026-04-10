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
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({ token });
});
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

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    console.log(data);
    alert("Login successful!");
}