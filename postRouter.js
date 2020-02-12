const router = require("express").Router();
const {allPost,singlePost,createPost} =require('./postController')

router.get("/",allPost );
router.get("/product/:id",singlePost);

router.post("/",createPost);

module.exports = router;
