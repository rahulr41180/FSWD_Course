
import { pool } from "../config/db.js";

export const createEmployeesTableWithDeleteParentAndChildRecordIfForeignKey = async () => {
    try {
        await pool.query(`
            CREATE TABLE employees(
                employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                employee_name TEXT,
                department_id INTEGER,

                CONSTRAINT fk_department
                
                FOREIGN KEY(department_id)
                REFERENCES department(department_id)
                ON DELETE CASCADE
            )    
        `)
    } catch (error) {
        console.log('error:', error)

    }
}

/*

ON DELETE CASCADE
FOREIGN KEY(department_id)
REFERENCES departments(department_id)
ON DELETE CASCADE

Result:

Department delete
↓
All related employees delete

Diagram:

Department deleted
       ↓
Rahul deleted
Amit deleted

*/