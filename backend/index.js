import express, { response } from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('MERN STACK APP - Bookstore')
});

app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT} `)
})