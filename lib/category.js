const database_mod=require('./database')//mod pour module

const getcat =function (callback){//function  getproduct(callback){}

	let sql='SELECT * from category';//declarer une variable pour la req sql


	database_mod.db.query(sql,null, function (error, result, fields) {//fnct query prend 3parametres 

		if (error) console.log('error:  ', error)
		 

		if (callback){//le callback on l'utilise pour transferer les donnes a la prochaine fnct
			callback(error,result)
		}

	})
}

 


exports.getcat=getcat;//export est un objet js on export lfonction getproduct pour pouvoir l'appeler ailleur

