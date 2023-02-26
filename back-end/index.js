//importamos express y creamos el servidos para el acceso a los informacion  de la base de datos
import express from "express";
// cors permitira el acceso de las rutas o direcciones que le indiquemos en este caso desde cual quiera
import cors from "cors";

// importamos las rutas creadas desde otros archivos
import  routeIndex  from "./routers/routerIndex.js";
import  routerUser  from "./routers/routersUser.js";
import router from "./routers/routersRegisters.js";

const app=express();


app.use(cors());

// hace uso de lo que le indiquemos, ya sean rutas u otros paquetes
app.use(express.json());
app.use(routeIndex);
app.use(routerUser);
app.use(router);



//se inicia la app 

app.listen(4000);
console.log("Express server listening on port",4000)