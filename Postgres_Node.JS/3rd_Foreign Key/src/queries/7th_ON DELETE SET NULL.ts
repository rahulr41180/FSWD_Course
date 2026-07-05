
import { pool } from "../config/db.js";

export const createEmployeesTableWithDeleteParentAndSetChildRecordWithNullIfForeignKey = async () => {
    try {
        await pool.query(`
            CREATE TABLE employees(
                employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                employee_name TEXT,
                department_id INTEGER,

                CONSTRAINT fk_department
                
                FOREIGN KEY(department_id)
                REFERENCES department(department_id)
                ON DELETE SET NULL
            )    
        `)
    } catch (error) {
        console.log('error:', error)
    }
}

/* 

ON DELETE SET NULL
FOREIGN KEY(department_id)
REFERENCES departments(department_id)
ON DELETE SET NULL

Result:

employee_name	department_id
Rahul	NULL
Amit	NULL

Employees bach jayenge.

*/