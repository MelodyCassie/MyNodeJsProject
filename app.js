require("dotenv").config();
const express = require('express');
const app = express();
const dbUrl = process.env.MONGO_URI
const ConnectDB = require('./features/db/connectDB')
const port = 3000;
const router = require('./features/router/router');
const notFound = require('./features/middleware/NotFound')

const cors = require('cors');
app.use(cors())


app.use(express.json());
app.use('/api/user', router);
app.use(notFound);

ConnectDB(dbUrl)
.then(()=>{
    app.listen(port,()=>{
        console.log(`app listening at port ${port}`)

    })
}).catch((error)=>{
    console.log(error)
})