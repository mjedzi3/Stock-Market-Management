// add express
import express from "express";

// add cors
import cors from "cors";

// add route from folder
import Router from "./route/route.js"

// start express
const app = express();

// port constant
const port = 1000;

// express json
app.use(express.json());

// cors
app.use(cors());

// router
app.use(Router);

// Set the app port
app.listen(port, () => {
    console.log(`Listening to Server Port: ${port}!!!`);
})
