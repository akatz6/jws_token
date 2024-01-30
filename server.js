const express = require("express");
const app = express();
const PORT = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");

app.listen(PORT, () => {
  console.log(`We are listening on port number ${PORT}`);
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const registerUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  res.send(hashedPassword);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  const match = await bcrypt.compare(password, user?.password);
  if (match) {
    const token = jwt.sign(
      {
        email,
      },
      process.env.WEB_TOKEN,
      { expiresIn: "1h" }
    );
    res.send(token);
  } else {
    res.send("Something didn't work");
  }
});

app.get("/accessToken", (req, res) => {
  axios
    .post("https://github.com/login/oauth/access_token", {
      code: req.query.code,
      client_id: process.env.YOUR_CLIENT_ID,
      client_secret: process.env.YOUR_CLIENT_SECRET,
      redirect_url: "https://localhost:3000",
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
    });
});
