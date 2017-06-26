var router= require("express").Router();
var Event  = require("../models/Events.js");
router.route('/')
    .post(function(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        var event = new Event();
        event.idMuseo=req.body.idMuseo;
        event.nombre=req.body.nombre;
        event.imagen=req.body.imagen;
        event.fecha=req.body.fecha;
        event.descripcion=req.body.descripcion;
        event.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Event created', success:1 });
        });

    })
    .get(function(req,res){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      Event.find(function(err, events) {
           if (err)
               res.send(err);

           res.json(events);
       });
    });
module.exports = router;
