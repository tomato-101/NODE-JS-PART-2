// Lesson 35
// Custom router 


// let http = require('http')
// let url = require('url') // node library ကနေ url lib ကို ခေါ်သုံးလိုက်တာပါ

// let route = {
//     "GET" : {
//         '/' : (req, res)=>{
//                 res.end('GET and / route')
//         },
//         '/contact' : (req, res)=>{
//             res.end('GET and / contact route')
//         }
//     },
//     "POST" : {
//         '/' : (req, res)=>{
//             res.end('POST and /  route')

//         },
//         '/contact' : (req, res)=>{
//             res.end('POST and / contact route')

//         }
//     }
// }
// let sever = http.createServer((req,res)=>{
//     let link = url.parse(req.method, true) //=> url ကို parse  လုပ်ပေးတာပါ
//     // console.log(link)
//     let data = req.url
//     console.log(req.url)
//     route[req.method][data](req,res)
// })
// sever.listen(3000, console.log('running'))


// myself
// let http = require('http')
// // let url = require('url')

// let route = {
//     "GET" :{
//         '/' : (req,res)=>{
//             res.writeHead(200, {'content-type' : 'text/html'}) // converting to html text
//             res.end('get & / route')
//         },
//         '/contact' : (req,res)=>{
//             res.end('get & contact route')
//         }
//     },
//     "POST" :{
//         '/' : (req,res)=>{
//             res.end('POST & / route')
//         },
//         '/contact' : (req,res)=>{
//             res.end('POST & contact route')
//         }
//     },
//     "No" : (req,res)=>{
//         res.writeHead(404)
//         res.end('PAGE NOT FOUND')
//     }
// }

// let sever = http.createServer((req,res)=>{
//     let link = route[req.method][req.url];
//    if(link != undefined && link != null){
//     link(req,res);
//    }else{
//     route['No'](req,res)
//    }
    
// })
// sever.listen(3000, console.log('running'))

let http = require('http')
let route = {
    "GET" :{
        '/' : (req, res)=>{
            res.end('GET && home')
        },
        '/contact' : (req, res)=>{
            res.end('GET && Contact')
        }
    },
    "POST" : {
        '/' : (req, res)=>{
            res.end('POST && home')
        },
        '/contact' : (req, res)=>{
            res.end('POST && Contact')
        }
    },
    "NO" : (req,res)=>{
        res.end("PAGE NOT FOUND")
    }
}

let sever = http.createServer((req,res)=>{
  let path = route[req.method][req.url]
  if(path != undefined && path != null){
    path(req,res)
  }else{
    route['NO'](req,res)
  }
})
sever.listen(3000,console.log('running'))