import mysql from 'mysql'; 

const conn = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "Password",
    database: "employeems" 
}) 

conn.connect((err) => {
    if(err) {
        console.log('Erro de conexao no banco de dados')
    }else{
        console.log('Banco de dados conectado.')
    }
}) 

export default conn;