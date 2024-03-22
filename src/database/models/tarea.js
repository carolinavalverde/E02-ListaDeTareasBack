import mongoose from "mongoose";

const { Schema } = mongoose;

const tareaSchema = new Schema({
  texto: {
    type: String,
    required: true,
  },
  completada: {
    type: Boolean,
    required: true,
  },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;
