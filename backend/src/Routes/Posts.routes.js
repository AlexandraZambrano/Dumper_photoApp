import express from "express"
import { uploadMulter, uploadB2 } from "../Middlewares/multer.middleware.js"
import { createPost, deletePost, getAllPosts, getSinglePost, getUserPosts, updatePost } from "../Controllers/Posts.controller.js"
import verifyToken from '../Middlewares/Auth.middleware.js'

const router = express.Router()

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);

router.get('/my/profile', verifyToken, getUserPosts);

router.post('/upload', verifyToken, uploadMulter, uploadB2, createPost);
router.put('/update/:id', verifyToken, uploadMulter, uploadB2, updatePost);

router.delete('/delete/:id', verifyToken, deletePost);

export default router