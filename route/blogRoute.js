

const express = require("express");
const blogController = require('./../controllers/blogController')

const router = express.Router();


  
  router.get("/blog", blogController.blogIndex);
  router.get("/blog/:id",blogController.blogDetail);
  router.get('/create',blogController.blog_create_get);
  router.post("/blog", blogController.createBlog);  
  router.delete("/blog/:id", blogController.deleteBlog);
  // router.put('/blog/:id',blogController.editBlog)



  module.exports = router