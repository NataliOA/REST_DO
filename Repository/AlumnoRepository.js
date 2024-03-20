var alumnos = []

export const getAllAlumnos = () => {
    return alumnos;
}

export const addAlumno = (alumno) => {
    alumnos.push(alumno);
    return alumno;
}

export const editAlumnoByID = (id, alumno) => {
    let pos = alumnos.indexOf(alumnos.find((alumno) => alumno.id == id));
    alumnos[pos] = alumno;

    return alumno;
}

export const deleteAlumnoByID = (id) => {
    let pos = alumnos.indexOf(alumnos.find((alumno) => alumno.id == id));
    let alumnoEliminado = alumnos[pos];
    alumnos.splice(pos, 1);
    return alumnoEliminado;

}
