
import { pool } from "../config/db.js";

export async function insert() {
    try {
        await pool.query(`
            INSERT INTO students
            VALUES (1, 'Rahul', 27)    
        `)

        console.log("Record has been inserted");
    } catch(error) {
        console.log('error:', error)
    }
}