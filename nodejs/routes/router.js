const express = require('express');
const router = express.Router();

//my lib
const products_mod= require('../lib/products'); 
const category_mod= require('../lib/category'); 
/*router.get('/article',function(req,res){
	console.log('test')
	res.send('reponse ok11')
 
})*/


router.get('/',function(req,res){
	console.log('afficher linterface accueil');
	res.render('index')	
})


router.get('/articles',function(req,res){

	products_mod.getproducts(function(error,result){
		
		if(error) console.log('error', error)

		category_mod.getcat(function(error,result1){
			
			if(error) console.log('error', error)
			console.log(result,result1)
			res.render('liste',{
				products:result,
				cat : result1
			})
		})
	})

})


router.get('/add',function(req,res){

	res.render('product_add')	
})

 	
 
router.post('/add',function(req,res){

let inputs = req.body;//acceder au corp de la req avc body-parser

	let data_insert=[[inputs.produit,inputs.designation,inputs.price]]//recuperer les donnees sisie par l'admin produit,designation et price sont des noms des inputs du fichier ejs 

	products_mod.product_add(data_insert,function(error,result){

		console.log(result)

		res.redirect('/add')//render la page add 
		
	})
	

})



router.get('/article/detail',function(req,res){
	console.log('afficher linterface detail');
	res.render('detail',{
		data1:'message de la page details',
		details:[{id:1,nom:'detail1'},{id:2,nom:'detail2'}]

	})
})



router.get('/order',function(req,res){
	console.log('afficher le formulaire');
	res.render('formulaire')
})





module.exports = router;