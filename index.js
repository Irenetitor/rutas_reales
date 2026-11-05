// IMPORTACIONES
import "dotenv/config"
import express from 'express'
import userRouter from './src/router/user.route.js'

// CONFIGURACIONES
const api=express();
const port=process.env.PORT||3001;
api.use(express.json());


// API (de prueba)
api.get("/",(req, res)=>{
    res.send("todo ok")
})


// RUTAS

api.use("/user", userRouter)


api.listen(port, ()=>{
    console.log("http://localhost:"+port)
})