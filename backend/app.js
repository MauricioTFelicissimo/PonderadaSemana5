const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();

const hostname = '127.0.0.1';
const port = 3002;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = '/Users/mauriciofelicissimo/Desktop/semana5/PonderadaSemana5/data/bd.db'; 
// const DBPATH = '../data/bd.db'; 


app.use(express.static("/Users/mauriciofelicissimo/Desktop/semana5/PonderadaSemana5/frontend"));
// app.use(express.static("../frontend"));

app.use(express.json());
app.get('/trabalho', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT nome, sobrenome, idade, ano FROM trabalho';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereTrabalho', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO trabalho (nome, sobrenome, idade, ano) VALUES ('" + req.body.nome + "', '" + req.body.sobrenome + "', '" + req.body.idade + "', '" + req.body.ano + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
	res.end();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });