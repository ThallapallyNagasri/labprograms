const express = require('express');
const jwt=require('jsonwebtoken');
const app = express();  
const PORT=3000;
app.use(express.json());
const users=[];
const JWT_SECRET='cvrcollege';
    
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if((username=="cvr")&&(password=="cvr")){
        const token=jwt.sign({username,password},JWT_SECRET)
        res.json(token);
    }
    else{
        res.status(400).json({error:'Invalid user'});
    }
});
    
app.get('/protected',authenticateToken,(req,res)=>{
    res.json({message:'Access granted'});
});

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token=authHeader.split(' ')[1]
    console.log(token);
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(403).json({error:'Invalid token.Login first'});
        }
        else{
            next();
        }

    });
}
app.listen(3000,()=>{
    console.log("server started on http://localhost:3000")
  })