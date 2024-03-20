import { Router } from "express";
import {deleteAlumno, editAlumno, getAlumnos, postAlumno} from "../Controller/AlumnoController.js"

const router = Router();  

router.get('', getAlumnos);
router.post('', postAlumno);
router.put('/:id', editAlumno);
router.delete('/:id', deleteAlumno);

export default router;