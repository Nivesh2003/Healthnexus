const express = require('express');
const userRoute = express.Router();
const userModel = require('../Models/userMondel');

userRoute.get('',async (req,res)=>{
    const user = await userModel.find();
    res.json({ 'msg': 'success', "value": user });
})
userRoute.get('/:id',async (req,res)=>{
    const id = req.params.id;
    const user = await userModel.findById(id).select('-password');
    res.json({ 'msg': 'success', "value": user });
})
userRoute.post('/register',async(req,res)=>{
    const user = await userModel.create(req.body);
    res.json({ 'msg': 'success', "value": user });
})

userRoute.post('/login',async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findOne({email:email});
    if(user && user.password === password) {
        const authToken = Math.random().toString(36).substring(2);  /*testing*/
        res.json({ 'msg': 'success', 'type': user.type ,'token':authToken , 'userId': user._id.toString() });
    }else {
        res.json({ 'msg': 'failed' });
    }
});

module.exports = userRoute;