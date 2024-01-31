import express from 'express';
import {getUsers, getUser, postUser, modifyUser, deleteUser, usersValidator, lastNameValidator} from '../Controllers/usersControllers.js'




const usersRouter = express.Router()

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', usersValidator, postUser);
usersRouter.put('/:id',lastNameValidator, modifyUser);
usersRouter.delete('/:id', deleteUser);


export default usersRouter;

