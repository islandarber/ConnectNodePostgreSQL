import express from 'express';
import {getOrders, getOrder, postOrder, modifyOrder, deleteOrder, getUserOrders, modifyInactivity} from '../Controllers/ordersControllers.js'


const ordersRouter = express.Router()

ordersRouter.get('/', getOrders);
ordersRouter.get('/:id', getOrder);
ordersRouter.post('/', postOrder);
ordersRouter.put('/:id', modifyOrder);
ordersRouter.delete('/:id', deleteOrder);
ordersRouter.get('/:id/orders', getUserOrders);
ordersRouter.put('/:id/check-inactive', modifyInactivity);


export default ordersRouter;

