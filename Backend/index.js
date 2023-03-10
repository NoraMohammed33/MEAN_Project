const express = require('express'); 
const mongoose = require('mongoose');
require('dotenv').config()
const BookRouter = require ('./routes/book')
const AuthRouter = require('./routes/author');
const CategoryRouter = require('./routes/category');
const userRoutes = require("./routes/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY || "Unknown user";

const PORT = process.env.PORT ;
const DB_URL = process.env.DB_URL; 

const server = express();
server.use(express.json());

server.use(['/book','/Book'], BookRouter);
server.use(['/category','/Category'], CategoryRouter);
server.use(['/author','/Author'],AuthRouter);
server.use(['/user','/User'],userRoutes);






mongoose.connect(DB_URL, (err) => {
    if (!err) {
        return console.log("DB connected")
    }
    console.log("not connected")
})

server.listen(PORT, (err) => {                                    
    if (!err) {
        return console.log("server start")
    }
}) 