
import { pool } from "../config/db.js";

export const onDelete = async () => {
    try {
        // not allow us because update or delete on table "department" violates foreign key constraint "fk_department" on table "employees"
        await pool.query(`
            DELETE FROM department
            WHERE department_id = 8;
        `)
    } catch (error) {
        console.log('error:', error)

    }
}