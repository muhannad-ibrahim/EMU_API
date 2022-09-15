const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const calcuRoutes = require('./src/routes/calcuRoutes')
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use('/api/calculation',calcuRoutes)

app.use((req, res, next) => {
    res.status(500).send("Error handle cause of your URL not follow the same name /api/calculation")
    next()
  })

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`nodejs api is listening on port: ${port}`);
})

