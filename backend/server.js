const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth');
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('Mongo Connected')).catch(err=>console.log(err));

const Post = mongoose.model('Post', {
  title: String,
  content: String,
}); 

app.use("/api", require("./routes/user")); 
app.use('/api/auth', authRoutes);
app.get('/api/users',(req,res)=>{
    res.json({
        message: "Succesfully connected",
        user:[
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' }
        ]
    });
});



const PORT = 5000;

app.listen(PORT,()=> {
    console.log(`Server started at ${PORT}`)
})