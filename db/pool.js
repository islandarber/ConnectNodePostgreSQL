import pg from 'pg'

const { Pool } = pg;

export const pool = new Pool()