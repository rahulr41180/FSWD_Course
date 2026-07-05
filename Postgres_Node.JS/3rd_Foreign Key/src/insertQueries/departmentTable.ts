
import { pool } from "../config/db.js";

export const insertIntoDepartmentTable = async () => {
    try {
        await pool.query(`
            INSERT INTO department(department_id, department_name)
            VALUES (1, 'DEVELOPMENT'),
            (2, 'HR')
        `)
    } catch (error) {
        console.log('error:', error)
    }
}