import express from 'express';
import {getUsers, getUser} from '../Controllers/usersControllers.js'


// const postUser = async () => {
//   const {firstName, lastName, age} = req.body;
//   try {
//     const {rows} = await pool.query('INSERT INTO users(first_name, last_name, age) VALUES ($1, $2, $3) RETURNING*;', [firstName, lastName, age]);
//     if(rows.length === 0){
//       res.sendStatus(404)
//   } else {
//       res.json(rows)
//   }
//   console.log(rows)

//   } catch (error) {
    
//   }
// }

const usersRouter = express.Router()

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);


export default usersRouter;

