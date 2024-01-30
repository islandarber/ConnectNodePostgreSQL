import {pool} from '../db/pool.js'

export const getUsers = async (req, res) => {
  try {
    const {rows} = await pool.query('SELECT * FROM users');
    res.json(rows);   
  } catch (err) {
    res.sendStatus(500);
  }
}

export const getUser = async(req, res) => {
  const {id} = req.params;

  try {
    const {rows} = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
    if(rows.length === 0){
        res.sendStatus(404)
    } else {
        res.json(rows[0])
    }
    console.log(rows)
   } catch(err){
    res.sendStatus(500)
}
}

export const postUser = async (req, res) => {
  try {
    const {first_name, last_name, age} = req.body;
    const {rows} = await pool.query('INSERT INTO users(first_name, last_name, age) VALUES ($1, $2, $3) RETURNING*;', [first_name, last_name, age]);

    console.log(rows)
    res.status(201).json(rows[0]);

  } catch (error) {
    req.status(505).send();
  }
}

export const modifyUser = async (req,res) => {
  const {id} = req.params;
  try {
    const {last_name} = req.body;
    const {rows} = await pool.query('UPDATE users SET last_name=$1 WHERE id=$2 RETURNING *', [last_name, id]);
    res.status(200).json(rows[0])
  } catch (error) {
    req.status(500).send();
  }
}

export const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
    res.status(200).json(rows[0])
  } catch (error) {
    req.status(500).send();
  }
}