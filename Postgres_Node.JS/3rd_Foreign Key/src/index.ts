
import { pool } from "./config/db.js";  
import { createDepartmentTable } from "./queries/1st_createDepartmentTableWithPrimary.js";
import { insert } from "./queries/2nd_insert.js";
import { createEmployee } from "./queries/3rd_createEmployeesTable.js";
import { onDelete } from "./queries/4th_ON_DELETE_Behavior.js";
import { createEmployeesTableWithDeleteBlockedIfForeignKey } from "./queries/5th_ON_DELETE_RESTRICT_(Default).js";
import { createEmployeesTableWithDeleteParentAndChildRecordIfForeignKey } from "./queries/6th_ON_DELETE_CASCADE.js";
import { createEmployeesTableWithDeleteParentAndSetChildRecordWithNullIfForeignKey } from "./queries/7th_ON DELETE SET NULL.js";
import { insertIntoDepartmentTable } from "./insertQueries/departmentTable.js";
import { insertIntoEmployeesTable } from "./insertQueries/employeeTable.js";
import { createEmployeesTableWithUpdateParentAndSetChildRecordWithUpdatedIdIfForeignKey } from "./queries/8th_ON UPDATE.js";

import { updateDepartmentTable } from "./insertQueries/updateDepartmentTable.js";

async function main() {
  try {
    // await createEmployeesTableWithUpdateParentAndSetChildRecordWithUpdatedIdIfForeignKey();
    // await onDelete();
    // await createEmployee();
    // await createDepartmentTable();
    // await insertIntoEmployeesTable();
    // await insertIntoDepartmentTable();
    await updateDepartmentTable();
  } catch (error) {
    console.error(
      '❌ Database Connection Failed'
    );

    console.error(error);
  }
}

main();