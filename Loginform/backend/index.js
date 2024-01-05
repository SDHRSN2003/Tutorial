import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Router } from "express";
import route from "./route.js"; 

const app = express();
app.use(express.json());
app.use('/user',route);
// app.get('/', (request,response) => {
//     console.log(request);
//     return response.status(200).send("Hello world");
// })

app.listen(PORT, () =>{
    console.log(`Running in port ${PORT}`);
})

mongoose.connect(mongodbURL).then(() =>{
    console.log("connected to mongodb");
}).catch((error)=>{
    console.log(error);
});