
import { addAlumno, getAllAlumnos, editAlumnoByID, deleteAlumnoByID } from "../Repository/AlumnoRepository.js";

export const getAlumnos = (req,res)=>{
    res.status(200).json(getAllAlumnos());
};

export const postAlumno = (req,res)=>{
    if(!req.body.nombre || !req.body.matricula || !req.body.id){
        res.status(400).json({ error: 'error' });
    }
    
    const alumno = {
        id: req.body.id,
        nombre: req.body.nombre,
        matricula: req.body.matricula
    }

    const alumnoN = addAlumno(alumno);
    if (alumnoN === null) {

        res.status(409).json({ error: 'El alumno ya existe' });
        return;

    }
    
    res.status(201).json(alumnoN);
};

export const editAlumno = (req,res)=>{
    if(!req.params){

        res.status(400).json({ error: 'Dirección inválida' });

    }

    const alumno = {
        id: req.body.id,
        nombre: req.body.nombre,
        matricula: req.body.matricula
    }

    const alumnoN = editAlumnoByID(req.params.id, alumno);
    if(alumnoN){

        res.status(200).json(alumnoN);
        return;

    }
    res.status(404).json({ error: 'No se encontró el ID' });
};

export const deleteAlumno = (req,res)=>{
    if(!req.params){

        res.status(400).json({ error: 'Dirección inválida' });;

    }

    const alumnoN = deleteAlumnoByID(req.params.id);
    if(alumnoN){

        res.status(200).json(alumnoN);

    }
    res.status(404).json({ error: 'No se encontró el ID' });
};
