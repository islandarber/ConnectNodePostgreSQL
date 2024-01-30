import express from 'express';
import 'dotenv/config'
import usersRouter from "./Routes/users.js"
import ordersRouter from './Routes/orders.js';



const app = express();
const port = 8000;

app.use(express.json());
app.use('/users', usersRouter)
app.use('/orders',ordersRouter)

app.get('/', (req, res, next) => {
  res.send("GET")
})

app.listen (8000, () => {
  console.log ('Listening to port', 8000)
} )

