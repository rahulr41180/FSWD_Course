
import { pool } from "../config/db.js";

export const insert = async () => {
    try {
        await pool.query(`
            INSERT INTO employees(employee_name, department_id)
            VALUES ('Rahul', 1),
            ('Amit', 2)
        `)
    } catch (error) {
        console.log('error:', error)
    }
}