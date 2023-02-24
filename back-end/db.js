import { createPool } from "mysql2/promise";
export const connection = createPool({
  host: "localhost",
  user: "root",
  password: "developer",
  port: "3306",
  database: "db_register_person",
});
console.log("connection established ");