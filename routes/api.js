var express = require('express');
var router = express.Router();
const db = require("../db");

router.get('/api/tecnicas', async (req, res, next) => {
    try {
      const listatecnicas = await db.findAll();
      res.json(listatecnicas);
    } catch (err) {
      next(err);
    }
  })

/* POST filtros. */ 
router.post('/api/tecnicas', async (req, res, next) => {

    console.log(req.body);

    try {
      if(Object.keys(req.body).length === 0) {

        console.log('passou aqui');
        const listatecnicas = await db.findAll();
        console.log('dados?' + listatecnicas);
        res.json(listatecnicas);
      }
    else {
  
      console.log('nao passou aqui nenuma vez?');
        const query = Object.values(req.body);
        const listatecnicas = await db.findExpressao(query);        
        res.json(listatecnicas);
      }
    
    //console.log(Object.keys(req.body).length);

    } catch (err) {
      next(err);
    }  
  })

  router.get('/api/tecnicas/ver/:id', async (req, res, next) => {
    const id = req.params.id; 
    try {
      const tecnicas = await db.findOne(id);      
    } catch (err) {
      next(err);
    }
  })

  module.exports = router;