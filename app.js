const express = require('express');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const existingIds = new Set(); 

function generateUniqueId() {
    let id;
    do {
        id = [...Array(32)].map(() => Math.random().toString(36)[2]).join('');
    } while (existingIds.has(id)); 
    existingIds.add(id); 
    return id;
}

app.use(session({
    genid: (req) => {
        return uuidv4();
    },
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

class user{
    constructor(username , password){
        this.username = username;
        this.password = password;
        this.id = id;
    }
}
const arr = [new user('maged', 'maged')];
function search(id){
for(i = 0;i < arr.length ;i++){
    if(id==arr[i].id){
        return arr[i];
    }
}
return null;
}
function managesessions(req,set){
    if (!req.session.user && arr.length!=0 ) {
       

        
        console.log("new client connected");
        if(set){
        req.session.user = generateUniqueId();
        req.session.user = arr.push.use
        res.send('maged');
        }else{
            return req.session.user;
        }
        return 'not found';
    } else {
        let currentuser = search(req.session.user);
        if(currentuser!=nullptr){
        console.log("reconnected", req.session.user);
        res.send('welcome back ' + req.session.user);
        return req.session.user;
        }}
};

app.get('/maged', (req, res) => {
    
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
