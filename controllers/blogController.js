const Blogs = require("./../model/blog");

const blogIndex = (req, res) => {
  Blogs.find().then((result) => {
    res.render("blogs/index", { title: "This is Blog page", blogs: result });
  });
};
const blogDetail = (req, res) => {
  const id = req.params.id;
  Blogs.findById(id).then((result) => {
    res.render("blogs/detail", { blogs: result, title: "Blogs Detail" });
  });
};
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "create blog" });
};

const createBlog = (req, res) => {
  const blog = new Blogs({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });
  blog.save().then(() => {
    res.redirect("/blog");
  });
};
// Not yet done
// const editBlog = (req, res) => {
//   const id = req.params.id;
//   const bo = req.body.title
//   console.log(id,bo)

// }
const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blogs.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blog" });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  blogIndex,
  blogDetail,
  blog_create_get,
  createBlog,
  deleteBlog,
};
