
import { pool } from "../config/db.js";

export async function createEnrollmentTableWithCompositePrimaryKey() {
    try {
        await pool.query(`
            CREATE TABLE entrollments (
                student_id INTEGER,
                course_id INTEGER,

                PRIMARY KEY(student_id, course_id)
            )    
        `)

        console.log("entrollments table has been created");
    } catch (error) {
        console.log('error:', error)
    }
}

/* 

Composite Primary Key

Sometimes one column isn't enough.

Example:

Students enrolling in courses.

A student can enroll in many courses.

A course can have many students.

Enrollment table:

student_id	course_id
1	101
1	102
2	101

Should this be allowed?

(1,101)
(1,102)
(2,101)

Yes.

Should this?

(1,101)
(1,101)

No.

So we use:

CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,

    PRIMARY KEY(student_id, course_id)
);

Meaning:

The combination must be unique.

Allowed:

(1,101)
(1,102)

Not allowed:

(1,101)
(1,101)

*/