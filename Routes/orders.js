import express from 'express';
import {getOrders, getOrder, postOrder, modifyOrder, deleteOrder, getUserOrders, modifyInactivity, ordersValidator,priceValidator} from '../Controllers/ordersControllers.js'


const ordersRouter = express.Router()

ordersRouter.get('/', getOrders);
ordersRouter.get('/:id', getOrder);
ordersRouter.post('/',ordersValidator, postOrder);
ordersRouter.put('/:id',priceValidator, modifyOrder);
ordersRouter.delete('/:id', deleteOrder);
ordersRouter.get('/:id/orders', getUserOrders);
ordersRouter.put('/:id/check-inactive', modifyInactivity);


export default ordersRouter;

