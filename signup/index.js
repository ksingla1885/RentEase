const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ensure the files directory exists
const filesDir = path.join(__dirname, "files");
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Handle form submission
app.post("/post", (req, res) => {
    const { 
        name, 
        email, 
        phone, 
        dob, 
        pass,
        gender,
        parentGuidelines
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !dob || !pass || !gender || !parentGuidelines) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const timestamp = Date.now();
    const fileName = `${name.replace(/\s+/g, "_")}-${timestamp}.txt`;
    const filePath = path.join(filesDir, fileName);

    const userData = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDOB: ${dob}\nPassword: ${pass}\nGender: ${gender}\nAgreed to Policies: ${parentGuidelines}\n`;

    fs.writeFileSync(filePath, userData);
    res.json({ success: true, message: "User data saved successfully!" });
});

// Endpoint to get all stored user data
app.get("/showData", (req, res) => {
    const fileNames = fs.readdirSync(filesDir);
    if (!fileNames.length) {
        res.send({ success: true, data: [] });
        return;
    }

    const allData = fileNames.map(fileName => {
        const filePath = path.join(filesDir, fileName);
        return fs.readFileSync(filePath, "utf-8");
    });

    res.send({ success: true, data: allData });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
