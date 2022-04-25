const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

//environment variable or you can say constants
env.config();

//MongoDB Connections
//mongodb+srv://root:<password>@cluster0.nd3v4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.nd3v4.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    ).then(() => {
        console.log('Database Connected Success');
    
    });

app.use(bodyParser());
app.use('/api', userRoutes);


app.listen(process.env.PORT, () => {
    console.log('listening on port ${process.env.PORT}');
});