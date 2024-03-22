import { Router } from "express";
import {
  eliminarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers.js";
import { check } from "express-validator";
import validacionTarea from "../helpers/validacionTarea.js";

const router = Router();

// app.get('/nuevo/Tarea',(req, res)=>{
//     console.log('aqui obtener la lista de todos los Tareas');
//     res.send('Aqui enviaremos la lista de Tareas')
//    })
router
  .route("/Tareas")
  .get(listarTareas)
  .post([validacionTarea],crearTarea);
router
  .route("/Tareas/:id")
  .get(obtenerTarea)
  .put(editarTarea)
  .delete(eliminarTarea);

export default router;