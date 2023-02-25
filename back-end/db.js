import {createPool} from "mysql2/promise";
export const connection = createPool({
  host: 'localhost',
  user: 'root',
  database: 'db_register_person',
  password:"developer",
  port:"3306",
});
console.log("conexion exitosa");