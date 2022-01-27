import express from 'express';
import bosyParser from 'body-parser';

import db from "./src/utils/db";

import router from './src/routers'
const port = 8080;

const app = express();
app.use(bosyParser.json());
app.use(bosyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("Rajapandi")
})

db.authenticate()
    .then(() => console.log("Database Connected"))
    .catch(err => console.log("Error", err))
app.use('/api', router);




app.listen(port, ()=> console.log(`Server start on ${port}`));
