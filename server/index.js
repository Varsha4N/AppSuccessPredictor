const express = require("express")
const mysql = require ("mysql2")
const cors = require('cors')

const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt')
const saltRounds = 10

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'mypass',
    database:'appsuccesspredictor',
})


app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(session({
    key:"userId",
    secret: "subscribe",
    saveUninitialized:false,
    cookie:{
        expires: 60 * 60 * 24
    }
}))

app.get("/login",(req,res)=>{
    if(req.session.user){
        res.send({loggedIn : true , user: req.session.user})
    }else{
        res.send({loggedIn : false })
    }
})

//register
app.post(`/register`,(req,res)=>{
    const username=req.body.username
    const emailid = req.body.emailid
    const password= req.body.password
    const sqlquery = "INSERT INTO user_data (user_name,email_id,password) VALUES (?,?,?)"

    bcrypt.hash(password,saltRounds,(err,hash)=>{

        if(err){
            console.log({err :err})
        }
        db.query(sqlquery,[username,emailid,hash],(err,result)=>{
            if(err){
                console.log(err)
                res.send({message : "Invalid user details "})
            }
            else{
                res.send(result)
            }
            
        })
    })  
})


//login
app.post(`/login`,(req,res)=>{
    const username=req.body.userName
    const password= req.body.password


    const sqlquery = "SELECT * FROM user_data WHERE user_name = ?;"

    db.query(
        sqlquery,username,
        (err,result)=>{
        if(err){
            res.send({err:err})
        } 
        if(result.length>0){
            bcrypt.compare(password,result[0].password, (error,response)=>{
                if(response){
                    req.session.user = result
                    console.log(req.session.user)
                    res.send(result)
                }else{
                    res.send({message : "Invalid username/password "})
                }
            })
        }
        else{
            res.send({message : "Invalid username/password "})
        }
    })
})

//feedback

app.post(`/feedback`,(req,res)=>{
    const userid = req.body.userId
    const feedback = req.body.feedback
    const sqlquery =  "INSERT INTO user_feedback (user_id,feedback) VALUES (?,?)"
    db.query(sqlquery,[userid,feedback],(err,response)=>{
        if(err){
            res.send({message : "Invalid username/password "})

        }
    })
    
})

//UserQueries

app.post(`/userquery`,(req,res)=>{
    console.log("api body")
    const app_name = req.body.app
    const category = req.body.category
    const size = req.body.size
    const type = req.body.type
    const price = req.body.price
    const content_rating=req.body.contentrating
    const description = req.body.description
    const success_score = req.body.score
    const sqlquery = "INSERT INTO user_queries (app_name,category,size,type,price,content_rating,description,success_score) VALUES (?,?,?,?,?,?,?,?)"

    db.query(sqlquery,[app_name,category,size,type,price,content_rating,description,success_score],(err,result)=>{
        if(err){
            res.send({message : "Something went wrong "})
        }
        else{
            res.send(result)
        }
    })
})


//logout
app.get('/logout', (req,res)=>{
    res.clearCookie();
    req.session.destroy();
    res.sendStatus(200);
    console.log("no user")
})






app.listen(3001, ()=>{
    console.log("running server")
})