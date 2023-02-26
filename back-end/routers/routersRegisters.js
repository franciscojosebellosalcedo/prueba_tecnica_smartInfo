import { Router } from "express";
//importamos la db para las consultas
import { connection } from "../db.js";

const router = Router();
// ruta que devuelve las personas desde la base de datos
router.get("/people", async (req, res) => {
    try {
        const [result] = await connection.query("select * from person");
        if (result.length > 0) {
            res.json({ people: result });
        } else {
            res.json({ message: "No se obtuvo informacion desde la base de datos" })
        }
    } catch (error) {
        res.json({ message: "Error en el servidor" });
        console.log(error);
    }

});
// ruta que devuelve los departamentos desde la base de datos
router.get("/departaments", async (req, res) => {
    try {
        const [result] = await connection.query("select * from departament");
        if (result.length > 0) {
            res.json({ departaments: result });
        } else {
            res.json({ message: "No se obtuvo informacion desde la base de datos" })
        }
    } catch (error) {
        res.json({ message: "Error en el servidor" });
        console.log(error);
    }

});





export default router;