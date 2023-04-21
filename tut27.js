/*
Lesson 34
Request Path
*/

// let http = require('http')

// let d = (req,res)=>{
//     if(req.method == 'GET'){
//         res.end('GET METHOD')
//     }else if(req.method == 'POST'){
//         res.end('POST method')
//     }else{
//         res.end('this is another method')
//     }
// }
// let sever = http.createServer(d)
// sever.listen(3000,console.log('running'))

// let http = require('http')

// let sev = (req, res)=>{
//     if(req.url === '/' || req.url === '/index' || req.url === '/home'){
//         res.end('HOME PAGE')
//     }else if(req.url === '/contact'){
//         res.end('CONTACT PAGE')
//     }else if (req.url === '/about'){
//         res.end('ABOUT PAGE')
//     }else{
//         res.end('PAGE NOT FOUND')
//     }
// }

// let sever = http.createServer(sev)
// sever.listen(3000, console.log('running'))



// NOTE => Request Path ကို ဆရာ waifer ရေးပြတဲ့နည်းရှိပါတယ်, နားမလည်ပဲ ခေါင်းရှုပ်နေလို့ ကွကိုယ် အဆင်ပြေသလိုရေးထည့်လိုက်တာပါ





// teacher
// let route = { // post method ပဲလာလာ get method ပဲလာလာ ဘာပဲလာလာ ဒီတစ်ခုတည်း အစားထိုးထည့်သုံးချင်လို့ route object ကို တည်ဆောက်ထားတာပဲ
//     "GET" : ()=>{
//         console.log('GET')
//     },
//     "POST" : ()=>{
//         console.log('POST')
//     }
// }

// let http = require('http')
// let sever = http.createServer((req,res)=>{
//    route[req.method](); // 1. post or get စစ်နေမယ့်အစား route object ပဲ ထည့်သုံးလိုက်ပါတော့တယ်, method နှစ်ခုလုံးကိုသိမ်းစည်းထားတဲ့ obj က route ဖြစ်နေလို့ပါ, 2. postman က data ဖမ်းယူတဲ့ပုံက get method ဖြစ်နေရင် route ထဲက get mehod အတွက်တည်ဆောက်ထားတဲ့ object က အလုပ် ထ,လုပ်မှာပါ | post method နဲ့လာရင်လဲ ထိုနည်းတူပါပဲ
// })
// sever.listen(3000, console.log('running'))

// exerciese 
// let http = require('http')
// let route = {
//     "GET" : ()=>{
//         console.log('this is GET')
//     },
//     "POST" : ()=>{
//         console.log('this is POST')
//     }
// }

// let sever = http.createServer((req, res)=>{
//     route[req.method]() // route ကိုခေါ်သုံးရတဲ့အကြောင်းအရင်းက method နှစ်ခုလုံး သူ့ထဲမှာသိမ်းထားလို့ req.method ခေါ်သုံးရခြင်းအကြောင်းအရင်းက request လုပ်ခံရတဲ့ method ကို သိချင်လို့, method နှစ်ခုလုံးက route ထဲမှာပဲရှိတော့ route[req.method] ကိုသုံးလိုက်တယ်, ထို method တွေကိုမှ route က object အတွင်းက function အနေနဲ့ရေးထားတော့ () ပေါင်းပေးလိုက်တာ => route[req.method]
// })
// sever.listen(3000, console.log('running'))

// ဒီနည်းက ပိုရှင်းပါတယ်
// let http = require('http')
// let route = {
//     "GET" : ()=>{
//         console.log('this is GET')
//     },
//     "POST" : ()=>{
//         console.log('this is POST')
//     }
// }

// let sever = http.createServer((req, res)=>{
//  let method = req.method;
//  console.log(method) // method ကိုအဖြေထုတ်တာ
//  console.log(req.url) // url ကို အဖြေထုတ်တာ

// })
// sever.listen(3000, console.log('running'))


// let http = require('http')
// let route = {
//     "GET" : {
//         '/' : ()=>{
//             console.log('GET & home')
//         },
//         '/contact' : ()=>{
//             console.log('GET & contact')
//         }
//     },
//     "POST" : {
//         '/' : ()=>{
//             console.log('POST & home')
//         },
//         '/contact' : ()=>{
//             console.log('POST & contact')
//         }
//     }
// }

// let sever = http.createServer((req, res)=>{
//  let method = req.method; // method တွေကို ဒီ var ထဲမှာ သိမ်းထားတယ် by using req.method
// //  route['GET']['/']
// // route[method]['/contact'](); // ထို method တွေကို လိုချင်တော့ အပေါ်က သိမ်းထားခဲ့တဲ့ var ကို ခေါ်သုံးတယ်
// let path = req.url
// // console.log(path)
// route[method][path]();
// })
// sever.listen(3000, console.log('running'))

let http = require('http')
let route = {
    "GET" : {
        '/' : ()=>{
            console.log("GET && HOME")
        },
        '/contact' : ()=>{
            console.log('GET && Contact')
        }
    },
    "POST" : {
        '/' : ()=>{
            console.log("POST && HOME")
        },
        '/contact' : ()=>{
            console.log('POST && Contact')
        }
    }
}
let sever = http.createServer((req,res)=>{
    let method = req.method;
    let url = req.url
    route[method][url]();
})
sever.listen(3000, console.log('running'))