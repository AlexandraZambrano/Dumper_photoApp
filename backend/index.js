import { connectDB } from "./src/DataBase/connection.js"
import cors from 'cors'
import express from "express"
import 'dotenv/config'

const app = express();

connectDB()
app.use(cors())
app.use(express.json())



app.listen(process.env.PORT_CONNECTION || process.env.ALT_PORT_CONNECTION)
console.log("server on port", process.env.PORT_CONNECTION)