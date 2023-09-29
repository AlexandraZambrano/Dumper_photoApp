import express from "express"
import { uploadMulter, uploadB2 } from "../Middlewares/multer.middleware.js"
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../Controllers/Posts.controller.js"

const router = express.Router()

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);


router.post('/upload', uploadMulter, uploadB2, createPost);
router.put('/update/:id', uploadMulter, uploadB2, updatePost);

router.delete('/delete/:id', deletePost);

export default router