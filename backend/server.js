const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://memoryoficarus:1234@cluster0.vs27cdu.mongodb.net/?appName=Cluster0')
    .then(() => console.log("MongoDB Atlas connected"))
    .catch(err => console.log(err));


// Schema
const User = mongoose.model('User', {
    name: String,
    email: String,
    skills: String
});

// Routes

// Register user
app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User saved" });
});

// Get all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(3000, () => console.log("Server running on port 3000"));