import express from 'express';
import 'dotenv/config'
import usersRouter from "./Routes/users.js"


const app = express();
const port = 8000;

app.use('/', usersRouter)

app.get('/', (req, res, next) => {
  res.send("GET")
})

app.listen (8000, () => {
  console.log ('Listening to port', 8000)
} )

