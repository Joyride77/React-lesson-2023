import { pool } from "../config/mysql-config.js";

export async function getNewRole() {
  const [rows] = await pool.query(`select * from user_role`);
  console.log("rows", rows);
  return rows;
}

export async function setNewRole(userRoleName) {
  const query = `insert into user_role(user_role_name) values(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}
