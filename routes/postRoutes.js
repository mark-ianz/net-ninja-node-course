const express = require ('express');
const Blog = require("./models/blog");

const router = express.Router ();

router.get("/create-post", (req, res) => {
  res.render("create-post", { title: "Create a post" });
});

router.get("/post/:id", async (req, res) => {
  const postID = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postID)) {
    res.status(404).render("404", { title: "ERROR 404" });
    return;
  }

  try {
    const postData = await Blog.findById(postID);

    if (!postData) {
      res.status(404).render("404", { title: "ERROR 404" });
      return;
    }

    res.render("post", { title: "Post", postData });
  } catch (err) {
    res.status(500).send(errorMessage);
  }
});

router.delete("/post/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Blog.findByIdAndDelete(id);

    res.json({ redirect: "/" });
  } catch (e) {
    res.json({ redirect: "/" });
  }
});

router.post("/submit-post", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.redirect("/");
  } catch (err) {
    res.status(500).send(errorMessage);
  }
});

module.exports = router;