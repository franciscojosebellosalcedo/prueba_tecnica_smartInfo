import express from "express";

const routeIndex=express();

routeIndex.get("/",(req,res)=>{
    res.send("Bienvenido a la pagina inicial");
});

export default routeIndex;
