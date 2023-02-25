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

router.get("/serch/:text", async (req, res) => {
    try {
        const [personSerch] = await connection.query("select * from person where document= ?", [req.params.text]);
        const [departamentSerch] = await connection.query("select * from departament where name_despatament= ?", [req.params.text]);
        console.log(departamentSerch)
        if (personSerch.length > 0) {
            const [departament] = await connection.query("select * from departament where id_departamento= ?", [person[0].departamento_id_departamento]);
            res.json({ person: personSerch, departament: departament })
        } else if (departamentSerch.length > 0) {
            const [person] = await connection.query("select * from person where document= ?", [departamentSerch[0].id_departamento]);
            res.json({ person: person, departament: departamentSerch })

        } else {
            res.json({ message: "No se encontro nada" })
        }
    } catch (error) {
        res.json({ message: "Error en el servidor" });
        console.log(error);
    }

});




export default router;