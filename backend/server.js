const express = require("express");
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const projectRouter = require('./routes/projectRoutes');
const userRouter = require('./routes/userRoutes');

app.get('/', (req, res)=>{
    res.send('hi');
})

app.use('/projects',projectRouter );
app.use('/users',userRouter )
app.listen(port, ()=> console.log(`server started on port ${port}`));