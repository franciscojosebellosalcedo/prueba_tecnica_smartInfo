import { Router } from "express";
import { connection } from "../db.js";

const router = Router();

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