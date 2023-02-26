import express from "express";


const routeIndex = express();
// ruta iniciañl de la app, se mostrara cuando se visite la ruta inical
routeIndex.get("/", (req, res) => {
    res.send("Bienvenido a la pagina inicial");
});




export default routeIndex;
