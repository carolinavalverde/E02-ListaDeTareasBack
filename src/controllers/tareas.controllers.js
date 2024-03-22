import Tarea from "../database/models/tarea.js";

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "Error al buscar las tareas" });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res
        .status(404)
        .json({ mensaje: "La tarea con el ID proporcionado no existe" });
    }
    res.status(200).json(tarea);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "Error al obtener la tarea" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "Tarea creada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const tareaExistente = await Tarea.findById(req.params.id);
    if (!tareaExistente) {
      return res
        .status(404)
        .json({ mensaje: "La tarea con el ID proporcionado no existe" });
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Tarea editada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar la tarea" });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const tareaExistente = await Tarea.findById(req.params.id);
    if (!tareaExistente) {
      return res
        .status(404)
        .json({ mensaje: "La tarea con el ID proporcionado no existe" });
    }
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la tarea" });
  }
};
