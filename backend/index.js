import { connectDB } from "./src/DataBase/connection.js"
import cors from 'cors'
import express from "express"
import 'dotenv/config'

import postRoutes from './src/Routes/Posts.routes.js'
import authRoutes from './src/Routes/Auth.routes.js'

const app = express();

connectDB()
app.use(cors())
app.use(express.json())


app.use('/post', postRoutes)
app.use('/auth', authRoutes)




app.listen(process.env.PORT_CONNECTION || process.env.ALT_PORT_CONNECTION)
console.log("server on port", process.env.PORT_CONNECTION)