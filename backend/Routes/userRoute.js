const express = require('express');
const userRoute = express.Router();
const userModel = require('../Models/userMondel');

userRoute.get('',async (req,res)=>{
    const user = await userModel.find();
    res.json({ 'msg': 'success', "value": user });
})
userRoute.post('/add',async(req,res)=>{
    const user = await userModel.create(req.body);
    res.json({ 'msg': 'success', "value": user });
})

userRoute.post('',async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findOne({email:email});
    if(user && user.password === password) {
        const authToken = Math.random().toString(36).substring(2);  /*testing*/
        res.json({ 'msg': 'success', 'type': user.type ,'token':authToken });
    }else {
        res.json({ 'msg': 'failed' });
    }
});

module.exports = userRoute;