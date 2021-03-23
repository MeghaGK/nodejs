var express=require('express');
var app = express();
// var cors=require('cors');
// app.use(cors);
app.use(express.urlencoded({extended:false}));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})


app.post('/submit-data',function(req,res){
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var name=req.body.firstname+" "+req.body.lastname;
    res.send(name+" submitted successfully");
});

app.listen(5000,function(){
    console.log('node server is running');
});
