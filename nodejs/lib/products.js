const database_mod=require('./database')//mod pour module




const getproducts =function (callback){//function  getproduct(callback){}

	let sql='SELECT * from products';//declarer une variable pour la req sql


	database_mod.db.query(sql,null, function (error, result, fields) {//fnct query prend 3parametres 

		if (error) console.log('error:  ', error)
		 
		console.log(result)

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

		return result;

	})
}


const product_add=function(data,callback){
 	let sql='INSERT INTO products (prod_name, prod_price, prod_desig)'+
 			'values ?';

	database_mod.db.query(sql,[data],function(error,result,fields){

		if (error) console.log('error:  ', error)
		 
		

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

		return result;

	}) 		
 }


const getone_product =function (id,callback){//function  getproduct(callback){}

	let sql='SELECT * from products where prod_id=?';//declarer une variable pour la req sql


	database_mod.db.query(sql,id, function (error, result, fields) {//fnct query prend 3parametres 

		if (error) console.log('error:  ', error)
		 
		console.log(result)

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

		return result;

	})
}

const delete_product =function (id,callback){//function  getproduct(callback){}

	let sql='delete from products where prod_id=?';//declarer une variable pour la req sql


	database_mod.db.query(sql,id, function (error, result, fields) {//fnct query prend 3parametres 

		if (error) console.log('error:  ', error)
		 
		console.log(result)

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

		return result;

	})
}
 

 const product_update=function(data,id,callback){
 	let sql='update products set ? where prod_id=? ';// ? donnes inconnu

	database_mod.db.query(sql,[data,id],function(error,result,fields){

		if (error) console.log('error:  ', error)
		 
		

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

		return result;

	}) 		
 }



/*let dataupdate={prod_name:'new value1'}
getone_product(3)
product_update(dataupdate,3)
getone_product(3)*/





/*let data_insert=[['chemise','asfa',200]]
product_add(data_insert,function(err,res){

	console.log(res)
})*/

exports.getproducts=getproducts;//export est un objet js on export lfonction getproduct pour pouvoir l'appeler ailleur
exports.product_add=product_add;
