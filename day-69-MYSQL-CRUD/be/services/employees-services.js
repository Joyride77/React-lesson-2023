import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}

export async function hireEmployee(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  const query = `insert into employees values(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
  const query = `UPDATE employees SET last_name=?, gender=? WHERE emp_no=?`;
  const [rows] = await pool.query(query, [lastName, gender, empNo]);
}

export async function fireEmployee(empNo) {
  const query = `DELETE FROM employees WHERE emp_no=?`;
  const [rows] = await pool.query(query, [empNo]);
}
