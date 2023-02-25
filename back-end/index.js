import express from "express";
import cors from "cors";

import  routeIndex  from "./routers/routerIndex.js";
import  routerUser  from "./routers/routersUser.js";
import router from "./routers/routersRegisters.js";


const app=express();


app.use(cors());

app.use(express.json());
app.use(routeIndex);
app.use(routerUser);
app.use(router);




app.listen(4000);
console.log("Express server listening on port",4000)