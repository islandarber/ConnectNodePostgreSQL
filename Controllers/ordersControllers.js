import {pool} from '../db/pool.js'
import {body, validationResult} from 'express-validator';

export const ordersValidator = [
  body('price').isNumeric().notEmpty(),
  body('user_id').notEmpty()
]

export const priceValidator = [
  body('price').isNumeric().notEmpty()
]

export const getOrders = async(req, res) => {
  try {
    const {rows} = await pool.query('SELECT * FROM orders')
    res.json(rows)
  } catch (error) {
    res.status(500).send();
  }
}

export const getUserOrders = async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await pool.query('SELECT orders.id, users.first_name, orders.user_id, users.last_name , orders.price FROM orders LEFT JOIN users ON orders.user_id = users.id WHERE orders.user_id = $1', [id]);
    if(rows.length === 0){
      res.sendStatus(404)
  } else {
      res.json(rows)
  }
  } catch (error) {
    res.status(500).send();
  }
}

export const getOrder = async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);

    if(rows.length === 0){
      res.sendStatus(404)
  } else {
      res.json(rows[0])
  }
  } catch (error) {
    res.status(500).send();
  }
}

export const postOrder = async (req, res) => {
  try {
    const {price, user_id} = req.body;
    const date = new Date();
    const errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()){
      const {rows} = await pool.query('INSERT INTO orders(price, date, user_id) VALUES ($1, $2, $3) RETURNING*;', [price, date, user_id])
      res.status(201).json(rows[0]);
    }
    res.status(422).send(errors);
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
}

export const modifyOrder = async (req, res) => {
  const {id} = req.params;
  try {
    const {price} = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()){
    const {rows} = await pool.query('UPDATE orders SET price=$1 WHERE id=$2 RETURNING *;', [price, id]);
    res.status(200).json(rows[0]);
    }
    res.status(422).send(errors);
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
}

export const deleteOrder = async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await pool.query('DELETE FROM orders WHERE id=$1 RETURNING *', [id])
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).send();
  }
}

export const modifyInactivity = async (req,res) => {
  const {id} = req.params;
  try {
    const {active} = req.body;
    const {rows} = await pool.query('UPDATE users SET active=$1 WHERE id=$2 RETURNING *;',[active, id])
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).send();
  }
}