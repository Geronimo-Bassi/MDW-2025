import express from "express"
import cors from "cors" //habilita cors
import dotenv from "dotenv" //permite usar variables de entorno guardadas en un archivo .env.

//se crea instancia, se usan
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000 //process.env.PORT vale 3001, si no lo encuentra entonces va por defecto 3000

app.use(cors()) //entre los () va ruta, habilita CORS para que tu servidor acepte peticiones desde otros orígenes
app.use(express.json())

app.get("/", (req, res) => {
      res.send("Server is ON")
})
//Primer parametro: un string de la url y lo segundo es la acción que va a realizar el servidor cuando le llegue un get
//Res para responder ese string de server is on

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
}) //Levanta el servidor y queda escuchando en el puerto configurado.
