var express = require('express');
var router = express.Router();
const db = require("../db");

 /*GET tecnicas. */
router.get('/ver/:id', async (req, res, next) => {
  const id = req.params.id; 
  try {
    const tecnicas = await db.findOne(id);
    res.render('tecnicas', { title: 'Técnicas de DX', tecnicas, action: '/ver/' + tecnicas._id });
  } catch (err) {
    next(err);
  }
})

router.get('/tecnicas', (req, res, next) => {
  res.render('tecnicas', { title: 'Tecnica de Avaliacao de DX', tecnica: {"Nome":"","Metodo":""}, action: '/tecnicas' });
});

module.exports = router;