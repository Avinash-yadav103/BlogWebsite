const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


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