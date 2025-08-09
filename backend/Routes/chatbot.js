const express = require('express');
    const chatbot=express();

    //chat pathway
    chatbot.post('/',(req,res)=>{
    const userMessage=req.body.message.toLowerCase();
    let reply="Sorry,I didn't understand that.";
    if(userMessage.includes('hello')||(userMessage.includes('hi'))){
        reply="Hi there! How can I help you?";
    }
    else if 
    (userMessage.includes('emergency')){
        reply="Click 'Emergency Help or You can book an ambulance from 'Book Ambulance' section or call: 011-4055 4055";
    }
    else if(userMessage.includes('help')){
        reply="Sure, I'm here to assist you.";
    }
    else if(userMessage.includes('name')){
        reply="I'm ChatBot, your virtual assistant.";
    }
    else if(userMessage.includes('how to make an appointment')){
        reply="You can make an appointment by visiting the 'Doctors section and choosing your preferred time slot.";
    }
    else if(userMessage.includes('doctor')||userMessage.includes('consult')){
        reply="Please select the 'Consult Doctor' option.";
    }
    else if(userMessage.includes('ambulance')||userMessage.includes("need ambulance")){
        reply="You can book an ambulance from 'Book Ambulance' section or call: 011-4055 4055";
    }
    else{
        reply="Contact our support team for further assistance.";
    }
    
    res.json({reply});
});



module.exports = chatbot;