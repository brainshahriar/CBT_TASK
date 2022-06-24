import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb'
import setRoutes from './src/routes/SetRoutes'
import questionRoutes from './src/routes/QuestionRoutes'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT
const DATABASE_URL:any = process.env.DATABASE_URL

// CORS Policy
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public',express.static('./public/uploads'));

// Database Connection
connectDB(DATABASE_URL)

// JSON
// app.use(express.json())


// Load Routes
app.use("/api/set",setRoutes )
app.use("/api/question",questionRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})