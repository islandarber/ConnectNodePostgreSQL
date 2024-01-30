import express from 'express';
import {getUsers, getUser, postUser, modifyUser, deleteUser} from '../Controllers/usersControllers.js'




const usersRouter = express.Router()

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', postUser);
usersRouter.put('/:id', modifyUser);
usersRouter.delete('/:id', deleteUser);


export default usersRouter;

