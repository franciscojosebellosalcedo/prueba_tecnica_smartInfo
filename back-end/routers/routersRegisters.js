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

router.get("/serchPerson/:text", async (req, res) => {
    try {
        const [personSerch] = await connection.query("select * from person where document= ?", [req.params.text]);
        const id_departament=personSerch[0].departamento_id_departamento;
        console.log(id_departament);
        
        if (personSerch.length > 0) {
            const [departament] = await connection.query("select * from departament where id_departamento= ?", [id_departament]);
            res.json({ person: personSerch, departament: departament });
        }else{
            res.status(200).json({message:"No se obtuvo informacion"});
        }
        console.log( typeof id_departament);
    } catch (error) {
        res.json({ message: "error en el servidor" });
        console.log(error);
    }

});




export default router;