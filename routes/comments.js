var router= require("express").Router();
var Comment  = require("../models/Comments.js");
router.route('/crear')
    .post(function(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        var comment = new Comment();
        comment.idMuseo=req.body.idMuseo;
        comment.calificacion=req.body.calificacion;
        comment.comentario=req.body.comentario;
        comment.fecha=req.body.fecha;
        comment.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Comment created', success:1 });
        });

    });
router.route('/')
    .get(function(req,res){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      Comment.find(function(err, comments) {
           if (err)
               res.send(err);

           res.json(comments);
       });
    });
module.exports = router;
