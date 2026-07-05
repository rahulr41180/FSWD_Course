
import { pool } from "../config/db.js";

export const createEmployee = async () => {
    try {
        await pool.query(`
            CREATE TABLE employees(
                employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                employee_name TEXT,
                department_id INTEGER,

                CONSTRAINT fk_department
                
                FOREIGN KEY(department_id)
                REFERENCES department(department_id)
            )
        `)
    } catch (error) {
        console.log('error:', error)
    }
}

/* 

CREATE TABLE employees(
    employee_id INTEGER GENERATED ALWAYS AS INDENTITY PRIMARY KEY,
    employee_name TEXT,
    department_id INTEGER,
    CONSTRAINT fk_department
    FOREIGN KEY(department_id)
    REFERENCES department(department_id)
)

department_id INTEGER
Ye foreign key column hai.

FOREIGN KEY
FOREIGN KEY(department_id)
employees table ka department_id which store the department_id of department table

REFERENCES
REFERENCES departments(department_id)

Meaning:
department_id ki value
departments table se verify karo

CONSTRAINT:
Excellent question. 🔥

Ye actually **Foreign Key se bhi zyada important concept** hai, kyunki `CONSTRAINT` sirf Foreign Key ke liye nahi hota. PostgreSQL me **Primary Key, Foreign Key, Unique, Check, Default, etc. sab constraints hote hain.**

Chaliye bilkul beginner se shuru karte hain.

---

# Sabse Pehle: Constraint Kya Hota Hai?

English word **Constraint** ka matlab hota hai:

> **Restriction** ya **Rule**

Database me Constraint ka matlab hai:

> **"Ye rule hamesha follow hona chahiye."**

Example:

Agar main bolu:

```text
College Rule:
Student age must be greater than 18.
```

Ye ek **rule** hai.

Database me bhi hum rules banate hain.

Example:

```text
Employee ID duplicate nahi hona chahiye.
```

Ye bhi ek rule hai.

```text
Department exist hona chahiye.
```

Ye bhi ek rule hai.

Database in rules ko **Constraint** kehta hai.

---

# Ab Tumhari Query Dekhte Hain

```sql
CREATE TABLE employees(
    employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employee_name TEXT,
    department_id INTEGER,

    CONSTRAINT fk_department
    FOREIGN KEY(department_id)
    REFERENCES department(department_id)
);
```

Isko line by line samajhte hain.

---

## Line 1

```sql
employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY
```

Yahan already ek constraint hai.

Kaunsa?

```sql
PRIMARY KEY
```

Actually internally PostgreSQL isko kuch aise samajhta hai:

```sql
CONSTRAINT employees_pkey
PRIMARY KEY(employee_id)
```

Matlab:

Rule:

```text
employee_id
must be unique
&
cannot be NULL
```

---

## Line 2

```sql
employee_name TEXT
```

Yahan koi constraint nahi hai.

Matlab:

* Duplicate allowed
* NULL allowed

---

## Line 3

```sql
department_id INTEGER
```

Abhi sirf ek integer column hai.

Abhi tak PostgreSQL ko nahi pata ki ye department ko refer karta hai.

---

## Line 4

```sql
CONSTRAINT fk_department
```

Yahi tumhara question hai.

Iska matlab:

> **Main ek rule bana raha hu aur us rule ka naam `fk_department` rakh raha hu.**

Yahan:

```sql
fk_department
```

sirf ek **name** hai.

Tum kuch bhi rakh sakte ho.

Example:

```sql
CONSTRAINT abc
```

ya

```sql
CONSTRAINT my_foreign_key
```

ya

```sql
CONSTRAINT department_fk
```

Sab valid hai.

---

## Fir Rule Kya Hai?

Next line batati hai.

```sql
FOREIGN KEY(department_id)
```

Meaning:

Rule apply karo:

```text
department_id
```

par.

---

Next line:

```sql
REFERENCES department(department_id)
```

Meaning:

Verify karo ki

```text
employees.department_id
```

ki value

```text
department.department_id
```

me exist karti ho.

---

# Matlab Internally PostgreSQL Kuch Aisa Sochta Hai

```text
Rule Name:
fk_department

Rule Type:
Foreign Key

Apply On:
department_id

Reference:
department.department_id
```

---

# Analogy

School me:

```text
Rule Name:
Uniform Rule

Rule:
Every student must wear uniform.
```

Database me:

```text
Rule Name:
fk_department

Rule:
Every employee must belong to a valid department.
```

---

# Without Constraint Name

Tum aise bhi likh sakte ho:

```sql
CREATE TABLE employees(
    employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employee_name TEXT,
    department_id INTEGER,

    FOREIGN KEY(department_id)
    REFERENCES department(department_id)
);
```

Ye bhi perfectly valid hai.

To fir naam dene ki zarurat hi kya hai?

---

# Constraint Name Kyu Dete Hain?

Maan lo tumne ye query chalayi:

```sql
INSERT INTO employees(employee_name, department_id)
VALUES('Rahul',100);
```

Aur department 100 exist nahi karta.

Agar constraint ka naam diya hai:

```sql
CONSTRAINT fk_department
```

Error:

```text
ERROR:
violates foreign key constraint "fk_department"
```

Immediately pata chal gaya kis rule ki wajah se error aaya.

---

Agar naam nahi diya:

PostgreSQL automatically naam dega.

Example:

```text
employees_department_id_fkey
```

Error:

```text
ERROR:
violates foreign key constraint
"employees_department_id_fkey"
```

Ye bhi sahi hai, bas automatic naam hai.

---

# Ek Practical Karo

## Step 1

Create Department table.

```sql
CREATE TABLE departments(
    department_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    department_name TEXT
);
```

---

## Step 2

Create Employee table.

```sql
CREATE TABLE employees(
    employee_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employee_name TEXT,
    department_id INTEGER,

    CONSTRAINT fk_department
    FOREIGN KEY(department_id)
    REFERENCES departments(department_id)
);
```

---

## Step 3

Run:

```sql
INSERT INTO employees(employee_name, department_id)
VALUES('Rahul',100);
```

Observe the error.

Tum dekhoge:

```text
fk_department
```

error message me aa jayega.

---

# Industry Best Practice

Real companies me hum meaningful names rakhte hain.

Example:

```sql
CONSTRAINT fk_employee_department
```

ya

```sql
CONSTRAINT fk_order_customer
```

ya

```sql
CONSTRAINT fk_product_category
```

Isse database maintain karna easy hota hai.

---

# Ek Chhoti Correction

Tumhari query me ek spelling mistake hai:

```sql
GENERATED ALWAYS AS INDENTITY
```

❌ `INDENTITY`

Sahi spelling:

```sql
GENERATED ALWAYS AS IDENTITY
```

---

## Homework (Important)

Aaj sirf **Constraints** practice karo.

1. `PRIMARY KEY`
2. `FOREIGN KEY`
3. Constraint name ke saath
4. Constraint name ke bina
5. Invalid insert karke error observe karo.

---

### Ek Question Tumhare Liye

Agar main likhu:

```sql
CONSTRAINT fk_department
```

aur **neeche `FOREIGN KEY` hi na likhu**, sirf:

```sql
CONSTRAINT fk_department
```

to kya table create ho jayegi?

Aur **kyun?**

Iska answer dene ki koshish karo. Isse pata chalega ki tumne `CONSTRAINT` aur `FOREIGN KEY` ke relation ko kitna samjha hai.

Excellent observation. 🔥

Ye question dikhata hai ki tum **syntax (grammar) samajhna chahte ho**, sirf query yaad nahi karna. Yehi approach ek achhe backend developer ki hoti hai.

Aur answer hai:

> **Partially yes.** `CONSTRAINT` ke baad jo valid constraint definition aati hai, woh usi constraint ka part hoti hai.

Lekin isko detail me samajhte hain.

---

# SQL Grammar

Jab PostgreSQL parser ye dekhta hai:

```sql
CONSTRAINT fk_department
```

to uske dimaag me turant ye aata hai:

> "Achha, ab ek constraint define hone wala hai."

Lekin abhi PostgreSQL ko ye nahi pata ki constraint kis type ka hai.

Wo wait karta hai.

---

## Example 1

```sql
CONSTRAINT fk_department
FOREIGN KEY(department_id)
REFERENCES departments(department_id)
```

Parser isko aise samajhta hai:

```text
Constraint Name:
fk_department

Constraint Type:
FOREIGN KEY

Column:
department_id

Reference:
departments.department_id
```

Ye poora block **ek hi constraint** hai.

---

## Example 2

```sql
CONSTRAINT pk_employee
PRIMARY KEY(employee_id)
```

Parser:

```text
Constraint Name:
pk_employee

Constraint Type:
PRIMARY KEY

Column:
employee_id
```

Again, ye bhi ek hi constraint hai.

---

## Example 3

```sql
CONSTRAINT chk_age
CHECK(age >= 18)
```

Parser:

```text
Constraint Name:
chk_age

Constraint Type:
CHECK

Rule:
age >= 18
```

---

# Iska Matlab

Tumne pucha:

> **"Constraint ke baad jo likhenge wo usi constraint ka part hota hai?"**

**Answer:**

Haan, **jab tak tum ek valid constraint definition complete nahi kar dete.**

---

# Analogy

Socho tum ek sentence likh rahe ho.

```
My name is Rahul.
```

Yahan:

```
My
```

likhne ke baad sentence complete nahi hua.

Parser wait karega.

```
My name
```

Abhi bhi wait karega.

```
My name is Rahul.
```

Ab sentence complete hua.

Exactly waise hi:

```
CONSTRAINT fk_department
```

Abhi incomplete hai.

Parser wait karega.

```
FOREIGN KEY(department_id)
```

Abhi bhi incomplete hai.

```
REFERENCES departments(department_id)
```

Ab constraint complete ho gaya.

---

# Example

Ye galat hai:

```sql
CREATE TABLE employees(
    employee_id INT,

    CONSTRAINT fk_department
);
```

Error.

Kyun?

Kyunki PostgreSQL bolega:

> Tumne constraint ka naam to de diya, lekin **constraint hai kis type ka?**

---

# Another Example

Ye bhi valid hai:

```sql
CREATE TABLE employees(

    employee_id INT,

    CONSTRAINT pk_employee
    PRIMARY KEY(employee_id),

    employee_name TEXT
);
```

Yahan parser samajhta hai:

```text
Constraint Name:
pk_employee

Constraint Type:
PRIMARY KEY

Column:
employee_id
```

Uske baad comma (`,`) aaya.

Parser samajh gaya:

> Constraint khatam.

Ab agla column start ho gaya.

---

# Isko Visualize Karo

```
CONSTRAINT fk_department
        │
        ▼
+---------------------------+
| FOREIGN KEY(department_id)|
| REFERENCES departments... |
+---------------------------+
```

Ye poora block **ek object** ki tarah treat hota hai.

---

# Ek Aur Interesting Cheez

Agar tum likho:

```sql
CONSTRAINT abc
UNIQUE(email)
```

to parser samjhega:

```
Constraint Name:
abc

Constraint Type:
UNIQUE

Column:
email
```

---

Agar tum likho:

```sql
CONSTRAINT xyz
CHECK(age > 18)
```

to parser samjhega:

```
Constraint Name:
xyz

Constraint Type:
CHECK

Rule:
age > 18
```

---

# Important Rule

`CONSTRAINT` khud koi rule nahi hai.

Ye sirf bolta hai:

> **"Ab jo rule define hoga, uska naam ye hoga."**

Actual rule hamesha next keyword batata hai:

* `PRIMARY KEY`
* `FOREIGN KEY`
* `UNIQUE`
* `CHECK`
* `EXCLUDE` (advanced)
* etc.

---

## Tumhare liye ek challenge 🔥

Bina DBeaver me run kiye batao ki ye query valid hai ya invalid, aur **kyun**:

```sql
CREATE TABLE test(
    id INT,

    CONSTRAINT my_rule
    UNIQUE(id),

    age INT
);
```

Aur ye wali:

```sql
CREATE TABLE test(
    id INT,

    CONSTRAINT my_rule,

    age INT
);
```

Sirf "valid" ya "invalid" mat bolna. Explain bhi karna ki PostgreSQL parser dono queries ko kaise read karega. Ye exercise tumhari SQL grammar bahut strong kar degi.


*/