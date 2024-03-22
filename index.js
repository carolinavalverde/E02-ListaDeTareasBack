import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import tareasRouter from "./src/routes/tareas.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/database.js";

//1- configurar un puerto
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//2- definir o configurar los middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// todo: configurar index.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

//3- configurar las rutas
// app.get("/nuevo/Tarea", (req, res) => {
//     console.log("Aquí obtener la lista de todos los Tareas");
//     res.send("Aqui enviaremos la lista de Tareas")
// });
//http://localhost:4001/api/nuevo/Tarea
app.use("/api", tareasRouter);
