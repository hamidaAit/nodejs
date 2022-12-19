 const express=require('express')
 const helmet = require("helmet");//for security

 const path=require('path')//gerer les path
const bodyParser=require('body-parser');
 
const app=express();

// all environments
app.use(bodyParser.urlencoded({extended : true}));//bodyparser 
app.use(bodyParser.json());//convertir les donnes envoyer en objet

app.set('views', path.join(__dirname, 'views'));//pour pouvoir modifier le nom du dossier views
app.set('view engine','ejs')//pour ne pas preciser l'extention ejs
app.use(express.static(path.join(__dirname, 'public')));//lire le dossier public et enlever le chemin public


app.use(express.json());


// include ROUTES & APIs
const routes = require('./routes/router');

app.use('/', routes);

app.use(helmet());//for security deploy


app.listen(processs.env.PORT  || 3000,function(){
	console.log("http://localhost:3000")
})









 

