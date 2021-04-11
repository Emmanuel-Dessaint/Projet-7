// const bcrypt = require('bcrypt')
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0123',
  database: 'p7'
});

exports.login = (req, res,) => {
    console.log(req.body)
  };

exports.signup = (req, res,) => {
  console.log(req.body)
  // bcrypt.hash(req.body.password, 10)
    // .then(hash => {
        var sql = `INSERT INTO user (mail, password) VALUES ('${req.body.username}', '${req.body.password}')`;
        
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted")
        
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      
    })
}