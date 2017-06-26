const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;
//variables para la configuración del express
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require("body-parser");
/*rutas para los servicios*/
var eventRoutes      = require("./routes/events.js");
var commentRoutes      = require("./routes/comments.js");
var database_url=process.env.MONGODB_URL|| "localhost/";
mongoose.connect(database_url+ 'musagt', { db: { nativeParser: true } });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//configuración del cliente
app.use(express.static(__dirname + '/client'));
app.use("/eventos",eventRoutes);
app.use("/comentarios",commentRoutes);
app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
