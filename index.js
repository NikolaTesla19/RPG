const express = require("express");
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const connectFirst = mysql.createPool({
      host: "localhost",
      user: "socialse_root",
      password: "78789885Denis"
});

const connection = mysql.createPool({
      host: "localhost",
      user: "socialse_root",
      password: "78789885Denis",
      database: "socialse_blood_forest"
});

app.post('/login', function(request, response){
  connection.query(`SELECT * FROM users WHERE users.userName = '${request.body.userName}'`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data.length === 1) {
          if (data[0].password === request.body.password) {
            response.send({
              answer: true,
              id: data[0].Id
            });
          } else {
            response.send({
              answer: false
            });
          }
        } else {
          response.send({
            answer: false
          });
        }
      }

  })
});

app.post('/register', function(request, response){
  connection.query(`SELECT * FROM users`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let newArrOfNameUsers = [];
      for (let i = 0; i < data.length; i++) {
        newArrOfNameUsers.push(data[i].userName);
      }
      if (newArrOfNameUsers.includes(request.body.userName)) {
        response.send({
          answer: false
        });
      } else {
        connection.query(`INSERT users (userName, password) VALUES ('${request.body.userName}', '${request.body.password}')`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            connection.query(`SELECT * FROM users WHERE users.userName = '${request.body.userName}'`, (err, data) => {
              response.send({
                answer: true,
                id: data[0].Id
              });
            })

          }
        });
      }
    }
  })
});
app.get('/ChooseHero', (request, response) => {
  response.sendFile(__dirname + '/public/html/сhooseHero.html');
})
app.get('/forest', (request, response) => {
  response.sendFile(__dirname + '/public/html/forest.html');
})
app.post('/removeHero', (request, response) => {
  connection.query(`DELETE FROM heroes WHERE Id = '${request.body.Id}';`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.send({
        answer: true
      })
    }
  });

})
app.post('/loadHeroes', (request, response) => {
  connection.query(`SELECT * FROM heroes WHERE heroes.gamerID = '${request.body.userId}'`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.send(data);
    }
  })
})
app.post('/createHero', (request, response) => {
  connection.query(`SELECT * FROM heroes`, (err, data) => {
    let newArrOfHeroesNames = [];
    for (let i = 0; i < data.length; i++) {
      newArrOfHeroesNames.push(data[i].nameOfHero);
    }
    if (!newArrOfHeroesNames.includes(request.body.nameOfHero)) {
      console.log(request.body);
      connection.query(`INSERT heroes (gamerID, nameOfHero, mapNumber, leftPosition, topPosition) VALUES ('${request.body.userId}', '${request.body.nameOfHero}', '${request.body.mapNumber}', '${request.body.left}', '${request.body.top}')`, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          response.send({
            answer: true
          })
        }
      })
      connection.query(`SELECT * FROM heroes WHERE heroes.nameOfHero = '${request.body.nameOfHero}'`, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          connection.query(`INSERT heroesIndicators (
          heroesId,
          hpMax,
          hpNow,
          manaMax,
          manaNow,
          xp,
          lvl,
          lvlPoint,
          gold)
          VALUES ('${data[0].Id}', '100', '100', '100', '100', '0', '1', '0', '0')`, (err, data) => {
            if (err) {
              console.log(err);
            }
          })
        }
      })

    } else {
      response.send({
        answer: false
      })
    }
  })
})
app.post('/loadPosition', (request, response) => {
  connection.query(`SELECT * FROM heroes WHERE heroes.Id = '${request.body.id}'`, (err, data) => {
    if (err) {
      console.log(err);
    }
      response.send(data[0]);
  })
})
app.post('/savePosition', (request, response) => {
  connection.query(`UPDATE heroes SET leftPosition = ${request.body.leftPosition}, topPosition = ${request.body.topPosition} WHERE heroes.Id = ${request.body.heroId}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.send({
        answer: true
      })
    }
  })

})
app.post('/loadHeroStat', (request, response) => {
  connection.query(`SELECT * FROM heroesIndicators WHERE heroesIndicators.heroesId = '${request.body.id}'`, (err, data) => {
    if (err) {
      console.log(err);
    }
      response.send(data[0]);
  })
})
app.post('/saveHP', (request, response) => {
  connection.query(`UPDATE heroesIndicators SET hpNow = ${request.body.hpNow} WHERE heroesIndicators.heroesId = ${request.body.heroId}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.send({
        answer: true
      })
    }
  })
})
app.listen(80);
