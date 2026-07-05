
import { pool } from "../config/db.js";

export const updateDepartmentTable = async () => {
    try {
        await pool.query(`
            UPDATE department
            SET 
                department_id = 11
            WHERE department_id = 1;    
        `)
    } catch (error) {
        console.log('error:', error)
    }
}