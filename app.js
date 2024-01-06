import {connectDB} from './db/connect.js';
import express, {  json } from 'express';
import dotenv from 'dotenv'
import serverless from 'serverless-http' 
const  app=express();
import mongoose from 'mongoose';
import tasks from './rotues/tasks.js';
//middle ware
app.use(express.static('./public'));
app.use(json())
dotenv.config()
//routes
 app.use('/.netlify/function/api',tasks)
    connectDB("mongodb+srv://bhargavsai:bhargav@cluster0.5g1v0ts.mongodb.net/Cluster0?retryWrites=true&w=majority")
const port=5000
const start=async()=>{
    try{
         
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }
    catch(error){
        console.log(error)
    }
}
start();
module.exports.handler=serverless(app)
