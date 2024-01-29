import express from 'express';
import {getUsers, getUser, postUser} from '../Controllers/usersControllers.js'




const usersRouter = express.Router()

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', postUser);


export default usersRouter;

