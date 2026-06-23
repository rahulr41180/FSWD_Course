
import { pool } from "./config/db.js";  
import { createStudentsTable } from "./queries/1st_createStudentsTableWithPrimaryKey.js";
import { createEnrollmentTableWithCompositePrimaryKey } from "./queries/2nd_createEnrollmentTableWithCompositePrimaryKey.js";
import { insert } from "./queries/insert.js";

async function main() {
  try {
    // await insert();
    // await createStudentsTable();
    await createEnrollmentTableWithCompositePrimaryKey();

  } catch (error) {
    console.error(
      '❌ Database Connection Failed'
    );

    console.error(error);
  }
}

main();