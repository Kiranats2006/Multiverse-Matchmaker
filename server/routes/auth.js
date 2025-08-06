const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const User=require('../models/User');
const jwt=require('jsonwebtoken');
const { use } = require('react');


router.post('/register', async(req,res)=>{
    try{
        const {username, email, password}=req.body;
        const hashedPass=await bcrypt.hash(password, 10);
        const newuser=new User({username, email, password: hashedPass});
        await newuser.save();
        res.status(201).json({message: 'User registered'});
    }
    catch(err){
        res.status(400).json({error:'User already exists', err})
    }
})
router.post('/login', async(req,res)=>{
    try {
        const {email, password}=req.body;
        const user=await User.findOne({email});
        if (!user) return res.json({error: 'User not found'});
    
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch) return res.json({error: 'Invalid credentials'});
    
        const token=jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
            expiresIn: '1d',
        })
        res.json({token, username: user.username});
    } catch (error) {
        res.json({error});
    }
})

module.exports=router;