//impostamos el enrutador de express para crear s rutas del servidor y este genere sus respuentas
import { Router } from 'express';
// importamos la db  para lkas consultas sql
import { connection } from '../db.js';

const routerUser = Router();

routerUser.post('/newUser', async (req, res) => {
  try {
    const [validationUser]=await connection.query("select * from user where email= ? ||  password= ?",[req.body.email,req.body.password]);
    if(validationUser.length>0){
      res.json({message:"El usuario ya existe","bool":false});
    }else{
      const [response] = await connection.query("insert into user (name,last_name,email,password) values (?,?,?,?)",
      [req.body.name,req.body.last_name,req.body.email,req.body.password]);
      if(response.affectedRows>0){
        res.status(200).json({"message":"Usuario agregado con exito","bool":true});
      }else{
        res.status(200).json({"message":"Usuario no agregado","bool":false});
      }
    }
  } catch (error) {
    res.json({ "message": "Hubo un error en el servidor", "error": error });
  }
});
// ruta que permirita el acceso de login
routerUser.get('/login', async (req, res) => {
  try {
    
    const [data] = await connection.query("select email,password from user where email= ? and password= ?", [req.body.email,req.body.password]);
    if(data.length>0){
      res.status(400).json({message:"Usuario encontrado","bool":true});
    }else{
      res.status(200).json({message:"Usuario incorrecto","bool":false});
    }
  } catch (error) {
    res.json({ "message": "Aseguarte de escribir bien tus datos", "bool": false });
  }
});



export default routerUser;