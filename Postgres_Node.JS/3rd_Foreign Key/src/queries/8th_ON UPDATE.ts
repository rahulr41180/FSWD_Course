
import { pool } from "../config/db.js";

export const createEmployeesTableWithUpdateParentAndSetChildRecordWithUpdatedIdIfForeignKey = async () => {

    try {
        await pool.query(`
            CREATE TABLE employees(
                employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                employee_name TEXT,
                department_id INTEGER,

                
                CONSTRAINT fk_department
                FOREIGN KEY(department_id)
                REFERENCES department(department_id)
                ON UPDATE CASCADE
            )    
        `)
    } catch (error) {
        console.log('error:', error);
    }

}

/*

ON UPDATE

Most people only know ON DELETE.

But there is also

ON UPDATE CASCADE

Suppose

Department

ID = 1

changes to

ID = 10

Then

Employee

department_id

also becomes

10

automatically.

*/