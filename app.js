const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
dotenv.config()
const calcuRoutes = require('./src/routes/calcuRoutes')
app.use(express.json())
app.use('/api/calculation',calcuRoutes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`nodejs api is listening on port: ${port}`);
})