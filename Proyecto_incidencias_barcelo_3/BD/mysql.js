var mysql = require('mysql');

var connection = mysql.createConnection('mysql://root:joXemcxAALNrYNSZSxqjmGoIXZBVNVLR@monorail.proxy.rlwy.net:51957/railway');

connection.getConnection(function(err){
    if(err){
        console.log(err);//si hubo un error nos lo mostrara
        return;
    }else{
        console.log('DB is connected')//si la conexion es correcta nos confirmara este suceso 
    }
});

module.exports=connection; //exportamos la funcion "connection"