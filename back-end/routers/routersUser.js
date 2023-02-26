//impostamos el enrutador de express para crear s rutas del servidor y este genere sus respuentas
import { Router } from 'express';
// importamos la db  para lkas consultas sql
import { connection } from '../db.js';
import bcrypt from "bcrypt";

const routerUser = Router();

const bcryptPassword = async (req, res, hash) => {
  try {
    const [response] = await connection.query("insert into user (name,last_name,email,password) values (?,?,?,?)",
      [req.body.name, req.body.last_name, req.body.email, hash]);
    if (response.affectedRows > 0) {
      return true;
      // res.status(200).json({ "message": "Usuario agregado con exito", "bool": true });
    } else {
      return false;

      // res.status(200).json({ "message": "Usuario no agregado", "bool": false });
    }
  } catch (error) {

  }
}

routerUser.post('/newUser', async (req, res) => {
  try {
    const [validationUser] = await connection.query("select * from user where email= ? ||  password= ?", [req.body.email, req.body.password]);
    if (validationUser.length > 0) {
      res.json({ message: "El usuario ya existe", "bool": false });
    } else {
      bcrypt.hash(req.body.password, 8, async (error, hash) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(hash)
        const bcryptPass = await bcryptPassword(req, res, hash);
        if (bcryptPass === true) {
          res.json({ message: "El usuario fue agregado con exito ya puedes ingresar al login", bool: true })
        } else {
          res.json({ message: "El usuario no se agrego", bool: false });
        }

      });
    }
  } catch (error) {
    res.json({ "message": "Hubo un error en el servidor", "error": error });
  }
});

const compareBcrypt = async (req, res) => {
  try {
    const [response] = await connection.query("select * from user where email= ?",
      [req.body.email]);
    if (response.length > 0) {
      return response[0].password;
      // res.status(200).json({ "message": "Usuario agregado con exito", "bool": true });
    } else {
      return null;

      // res.status(200).json({ "message": "Usuario no agregado", "bool": false });
    }
  } catch (error) {

  }

}
routerUser.get("/loginUser", async (req, res) => {
  try {
    // const data = await compareBcrypt(req, res);
    // console.log(req.body);
    // res.json()
    console.log(req.body)

    // bcrypt.compare(req.body.password, data, (error, result) => {
    //   if (error) {
    //     res.json({ message: "No se pudo completar la operacion" });
    //     return;
    //   }
    //   if(result){
    //     res.json({bool:true});
    //   }else{
    //     res.status(400).json({bool:false});

    //   }
    //   console.log( result);
    // });
  } catch (error) {
    res.json({ message: "Error en el servidor" });

  }
});




export default routerUser;