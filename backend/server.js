//Définition des modules
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');
const users = require('./routes/user');

//Connexion à la base de donnée

mongoose.connect('mongodb+srv://regis94:A@zerty678@atypikhouse.sbxv1hu.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

//On définit notre objet express nommé app
const app = express();
// app.use(passport.initialize());
// require('./passport')(passport);

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});


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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});