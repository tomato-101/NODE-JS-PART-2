/*
    Lesson 37
    Dot ENV Usage
*/


// let http = require('http')
// let route = {
//     "GET" :{
//         '/' : (req, res)=>{
//             res.end('GET && home')
//         },
//         '/contact' : (req, res)=>{
//             res.end('GET && Contact')
//         }
//     },
//     "POST" : {
//         '/' : (req, res)=>{
//             res.end('POST && home')
//         },
//         '/contact' : (req, res)=>{
//             res.end('POST && Contact')
//         }
//     },
//     "NO" : (req,res)=>{
//         res.end("PAGE NOT FOUND")
//     }
// }

// let sever = http.createServer((req,res)=>{
//   let path = route[req.method][req.url]
  
//   if(path != undefined && path != null){
//     path(req,res)
//   }else{
//     route['NO'](req,res)
//   }
// })
// sever.listen(3000,console.log('running'))


// url params တွေကို အဖြေထုတ်ခြင်း
// const { link } = require('fs')
let env = require('dotenv').config(3000)
let http = require('http')
const { url } = require('inspector')
let sever = http.createServer((req,res)=>{
    res.end('hello')
    let link = req.url
    console.log(req.url)
    
    
})
sever.listen(process.env.PORT, console.log(`running  at port ${process.env.PORT}`))


// Note 
// 1. dot env file install => npm install dotenv --save
// 2. .env ကို ခေါ်သုံး => require('dotenv').config()
// 3. sever.listen(3000,...) => port နံပါတ်နေရာမှာ .env file က port name ကိုခေါ်သုံး => sever.listen(process.env.PORT) 

// .env note from google
// env file is a convenient way to store environment-specific variables, such as API keys and database passwords, in a simple text file. This enables you to manage sensitive information consistently while maintaining its security