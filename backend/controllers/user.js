const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0123',
  database: 'p7'
});

exports.signup = (req, res,) => {
  var search = `SELECT 1 FROM users WHERE mail = '${req.body.username}'`;
  con.query(search, function (err, result) {
    if (err) console.log(err)
    if (result.length >= 1) {
      console.log("il y a déjà un utilisateur avec cette adresse mail")
      return res.status(401).json({ error : "Il y a déjà un compte avec cette adresse mail"}) // il faut afficher un message d'erreur
    }
    
    else {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        var sql = `INSERT INTO users (mail, password) VALUES ('${req.body.username}', '${hash}')`;
        con.query(sql, function (err, result) {
          if (err) console.log(err)
          console.log("Utilisateur crée avec succès")
          res.status(201).json({message : 'Utilisateur crée avec succès !'})  // il faut afficher la page d'accueil
        })
      })
    }
  }) 
}
exports.login = (req, res,) => {
  var search = `SELECT 1 FROM users WHERE mail = '${req.body.username}'`;
  con.query(search, function (err, result) {
    if (err) console.log(err)
    if (result.length !== 1) {
      console.log('utilisateur non trouvé')
      return res.status(401).json({ error: "Cette adresse mail n'est pas dans la base de données !" }); // afficher message d'erreur
    }
    var gopassword = `SELECT password FROM users WHERE mail = '${req.body.username}'`;
    con.query(gopassword, function (err, resultpass) {
      if (err) console.log(err)
      var pass = resultpass[0].password
      bcrypt.compare(req.body.password, pass)
      .then(valid => {
        if (!valid) {
          console.log("mot de passe incorrect")
          return res.status(401).json({ error: 'Mot de passe incorrect !' }); // afficher message d'erreur mdp incorrect
        }
        var identifiant = `SELECT id FROM users WHERE mail = '${req.body.username}'`;
        con.query(identifiant, function (err, resultid) {
        var useridtoken = resultid[0].id
        console.log("connexion réuissie")
          res.status(200).json({         // afficher la page d'accueil
            userId: useridtoken,
            token: jwt.sign(
              { userId: useridtoken },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          })
        })
      })
      .catch(error => res.status(500).json({ error }));
    }) 
  })
}
