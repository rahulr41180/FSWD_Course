
import { pool } from "../config/db.js";

export async function createStudentsTable() {
    try {
        await pool.query(`
            CREATE TABLE students (
                student_id INTEGER PRIMARY KEY,
                name VARCHAR(100),
                age INTEGER
            )    
        `)

        // both have same means
        // await pool.query(`
        //     CREATE TABLE students (
        //         student_id INTEGER,
        //         name VARCHAR(100),
        //         age INTEGER

        //         PRIMARY KEY(student_id)
        //     )    
        // `)

        console.log("table has been created");
    } catch (error) {
        console.log('error:', error)
    }
}

/* 

Node.js
↓
pg package
↓
TCP connection
↓
PostgreSQL Server
↓
Parser
↓
Planner
↓
System Catalog Update
↓
Table Created
↓
Success Response
↓
Node.js

*/