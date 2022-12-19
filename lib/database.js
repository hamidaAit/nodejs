const mysql=require('mysql')



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shop'
});
 
connection.connect();



  db=connection;


 exports.db=db;//pour exporter 