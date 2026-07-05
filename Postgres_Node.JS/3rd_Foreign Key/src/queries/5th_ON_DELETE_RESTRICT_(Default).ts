
import { pool } from "../config/db.js";

export const createEmployeesTableWithDeleteBlockedIfForeignKey = async () => {
    try {
        await pool.query(`
            CREATE TABLE employees(
                employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                employee_name TEXT,
                department_id INTEGER,

                CONSTRAINT fk_department
                
                FOREIGN KEY(department_id)
                REFERENCES department(department_id)
                ON DELETE RESTRICT
            )
        `)
    } catch (error) {
        console.log('error:', error)
        
    }
}

/* 

ON DELETE RESTRICT (Default)
FOREIGN KEY(department_id)
REFERENCES departments(department_id)
ON DELETE RESTRICT

Result:

Delete blocked

Department delete nahi hoga.

*/