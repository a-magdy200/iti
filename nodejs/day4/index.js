const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/static', express.static("static"));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.post("/api/sign-up", (req, res) => {
  const {email, password, username = ''}  = req.body;
      if (!fs.existsSync("data.json")) {
        fs.writeFileSync("data.json", "{}");
      }
      const fileData = JSON.parse(fs.readFileSync("data.json").toString());
      if (email === undefined || password === undefined) {
        res.status(500).send({error: "Both email and password fields are required"});
        return;
      }
      const current = fileData[email];
  if (current) {
    res.status(400).send({error: "Email already exists", success: false});
  } else {
    fileData[email] = {
      password ,username
    };
    try {
      fs.writeFileSync("data.json", JSON.stringify(fileData));
      res.status(200).send({"success": true, username});
    } catch (e) {
      console.log(e);
      res.status(500).send({"error": "Server Error"});
    }
  }
});
app.post("/api/login", (req, res) => {
  const {email, password}  = req.body;
      if (!fs.existsSync("data.json")) {
        fs.writeFileSync("data.json", "{}");
      }
      const fileData = JSON.parse(fs.readFileSync("data.json").toString());
      if (email === undefined || password === undefined) {
        res.status(500).send({error: "Both email and password fields are required"});
        return;
      }
      const current = fileData[email];

  if (current) {
    if (current.password === password) {
      res.status(200).send({"success": true, username: current.username});
    } else {
      res.status(403).send({"error": "Wrong Password", success: false});
    }
  } else {
    res.status(403).send({"error": "Wrong Email", success: false});
  }
})

app.listen(4000, () => {
  console.log("Application Started");
});
