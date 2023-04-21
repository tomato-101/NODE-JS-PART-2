/*
Lesson 33
GET or Post Method
*/



// let http = require('http')
// let sever = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end(`I'm running now`)
// })

// sever.listen(3000,console.log('running'))

// new way => clearing coding
let http = require('http')
let latest = (req, res)=>{
    // res.writeHead(200,{'content-type': 'text/html'})
    // res.end('hello')
    // console.log(req) // post method နဲ့ လာလာ get နဲ့လာလာ req data ဆိုတာ ပါပါတယ်
    if(req.method == 'GET'){
        res.end('this is GET method')
    }else if(req.method == 'POST'){
        res.end('this is post method')
    }else{
        res.end('this is another method')
    }
}
let sever = http.createServer(latest)
sever.listen(3000, console.log('running now'))


// server တစ်ခု run လိုက်ရင် method နှစ်မျိုးရှိပါတယ် GET & POST method ပါ
// ကိုယ် run ထားတဲ့ method ကို သိချင်ရင် if statement နဲ့စစ်လို့ရပါတယ်