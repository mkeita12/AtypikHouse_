const app = require('./App');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

//Définition des modules
//const express = require("express");
//const mongoose = require('mongoose');
//const bodyParser = require("body-parser");
//const passport = require('passport');
//const users = require('./backend/routes/user');

//Connexion à la base de donnée


//On définit notre objet express nommé app
//const app = express();
// app.use(passport.initialize());
// require('./passport')(passport);

//Body Parser
//const urlencodedParser = bodyParser.urlencoded({
//  extended: false
//});
//app.use(urlencodedParser);

//app.use(bodyParser.json());

//Définition des CORS
//app.use('/api/users', users);

//app.get('/', function(req, res) {
//    res.send('hello');
//});


// app.use(function(req, res, next) {
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

//Définition du routeur
// const router = express.Router();
// app.use("/user", router);
// require(__dirname + "/controllers/userController")(router);

//Définition et mise en place du port d'écoute
