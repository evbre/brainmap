var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public')); 

app.use('/img', express.static(__dirname + '/public')); 

// --- routes --- //

app.get("/",function(req,res){
	res.render("home");
});

app.get("/map1",function(req,res){
	res.render("map1");
});

app.get("/map2",function(req,res){
	res.render("map2");
});

app.get("/map3",function(req,res){
	res.render("map3");
});

app.get("/map4",function(req,res){
	res.render("map4");
});

app.get("/map5",function(req,res){
	res.render("map5");
});

app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});