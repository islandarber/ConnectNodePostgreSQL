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
    const {rows} = await pool.query(`SELECT * FROM users WHERE id=${id}`);
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

export const postUser = async () => {
  const {firstName, lastName, age} = req.body;
  try {
    const {rows} = await pool.query('INSERT INTO users(first_name, last_name, age) VALUES ($1, $2, $3) RETURNING*;', [firstName, lastName, age]);

    console.log(rows)
    res.status(201).json(rows[0]);

  } catch (error) {

    req.status(505).send();
    
  }
}