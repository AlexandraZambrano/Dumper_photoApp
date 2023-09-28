import express from "express"
import { uploadMulter, uploadB2 } from "../Middlewares/multer.middleware.js"

const router = express.Router()

router.post('/upload', uploadMulter, uploadB2, (req, res) => {
    res.json(res.locals)
})

export default router