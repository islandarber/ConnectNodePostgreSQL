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