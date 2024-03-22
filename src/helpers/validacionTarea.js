import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionTarea = [
  check("texto")
    .notEmpty()
    .withMessage("El texto de la tarea es obligatorio"),
  check("completada")
    .isBoolean()
    .withMessage("El campo completada debe ser un valor booleano"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTarea;
