const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const postRoutes = require ("./routes/postRoutes.js")

const errorMessage = "There was an unexpected error. Please try again later.";

// express app
const app = express();

// register view engines
app.set("view engine", "ejs");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));

async function startServer() {
  try {
    // connect to mongoDB
    const dbURI =
      "mongodb+srv://bustillomarkian23:WgWLCT3KfjfLGheP@cluster0.6pyo3va.mongodb.net/node-ninja?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(dbURI);

    // listen for request
    app.listen(3000);

    console.log("Server successfully started.");
  } catch (err) {
    console.log("There was an error:", err);
  }
}

startServer();

// handlers
app.get(["/", "/home", "/index"], async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("index", { title: "Home", blogs, error: null });
  } catch (err) {
    res.status(500).render("index", {
      title: "Home",
      blogs: [],
      error: errorMessage,
    });
  }
});

app.get("/about", async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();

    res.render("about", { title: "About", teamMembers, error: null });
  } catch (err) {
    res.status(500).render("about", {
      title: "About",
      teamMembers: [],
      error: errorMessage,
    });
  }
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.use (postRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "ERROR 404" });
});
