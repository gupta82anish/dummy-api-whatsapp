var https = require('https');
var http = require('http');
var request = require('request');
module.exports = {
    callWhatsapp(req,res){
        let apiKey = "9e300aa87209c2c8c9e01431114a551d5afae5da8c220";
        let ownNumber = "919797493235";
        // let msg = "hey there! I'm using whatsapp";
        phone = req.params.phone;
        msg = req.params.text;
        let url = `https://www.waboxapp.com/api/send/chat?token=${apiKey}&uid=${ownNumber}&to=${phone}&custom_uid=testmsg14&text=${msg}`;
        // let url = `http://localhost:4040/mockWhatsapp/${phone}`;
        https.get(url,(resp)=>{
            let data = '';
            resp.on('data', (chunk)=>{
                data += chunk
            })
            resp.on('end',()=>{
                res.setHeader('Access-Control-Allow-Origin','*')
                res.send(data)
                console.log(JSON.parse(data));
            })
        }).on('error', (err)=>{
            res.send(err)
            console.log('Error: '+ err);
        })
    },
    callWhatsappWithText(req,res){
        let apiKey = "9e300aa87209c2c8c9e01431114a551d5afae5da8c220";
        let ownNumber = "919797493235";
        let text = req.params.text;
        let url = `https://www.waboxapp.com/api/send/chat?token=${apiKey}&uid=${ownNumber}&to=${phone}&custom_uid=testmsg10&text=${msg}`;
        https.get(url, (resp)=>{
            let data='';
            resp.on('data',(chunk)=>{
                data += chunk
            })
            resp.on('end',()=>{
                res.setHeader('Access-Control-Allow-Origin','*')
                res.send(data)
                console.log(JSON.parse(data));
            })
        }).on('error',(err)=>{
            res.send(err);
            console.log('Error: '+err);
        })
    },
    callbackWhatsapp(req,res){
        console.log(req.body);
        
        // res.send(req);
    }
}
