let express=require('express');
let app = express();
//setup the veiw engine
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
db=[];
app.use(express.static('img'));
app.use(express.static("css"));

var filePath = __dirname + "/views/"; ///physical address

app.get("/",function(req,res){
    let fileName=filePath + "index.html";
    res.sendFile(fileName);
});
app.get("/addNewTask",function(req,res){
    let fileName = filePath+"createTask.html";
    res.sendFile(fileName);

});
app.get("/listAll",function(req,res){
    res.render("alltasks",{tasks: db});

});
app.post("/createTask",function(req,res){
    db.push(req.body);
    res.render("alltasks",{tasks: db}); /////,mysecondpro :2}
});


app.listen(8080);
