const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        username:{
            type:String,
            unique:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type: String,
            required:true
        },
        bio: { type: String },
        profilePicture: { type: String },
        role: { type: String, default: 'user' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {timestamps:true}
);

const User = mongoose.model('user', userSchema)
module.exports = User;
