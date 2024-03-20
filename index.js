//import app from "./app.js";
import express from "express";
//import {AlumnoRepository} from "./Repository/AlumnoRepository.js";
import alumnosrouter from "./routers/alumnosRouter.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/alumnos',alumnosrouter);

async function startServer(){
    await app.listen(PORT);
    console.log("Server en puerto 3000")
}

startServer();
