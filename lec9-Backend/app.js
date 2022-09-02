const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:4200']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.json())

app.use(cors(corsOptions))

app.use('/api', (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        if(authHeader === 'faisal') {
            next();
        } else {
            return res.status(401).json({message: "You are unauthorized"})
        }
    } else {
        return res.status(401).json({message: "You are unauthorized"})
    }
}, productRoutes);


mongoose.connect('mongodb://cmdlhrltx03:27017/myApiDb', () => {
    console.log('Database is connected.');
    app.listen(3000, () => {
        console.log('Strated listening at port 3000.');
    })
});