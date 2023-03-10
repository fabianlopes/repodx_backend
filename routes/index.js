const { query } = require('express');
var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET index. */
router.get('/', async (req, res, next) => {
  try {    
    const listatecnicas = await db.findAll();
    res.render('index', { title: 'RepoDX', listatecnicas });
  } catch (err) {
    next(err);
  }
})

/* GET assistente. */ 
router.get('/assistente', async (req, res, next) => {
  try {
    const listatecnicas = await db.findAll();
    res.render('assistente', { title: 'Lista de Tecnicas', listatecnicas });
  } catch (err) {
    next(err);
  }
})

/*GET tecnicas. */
router.get('/tecnicas/:id', async (req, res, next) => {
  const id = req.params.id; 
  try {
    const tecnica = await db.findOne(id);
    res.render('tecnicas', { title: 'Técnicas de Avaliacao de DX', tecnica });
  } catch (err) {
    next(err);
  }
})

/* POST assistente. */ 
router.post('/assistente', async (req, res, next) => {

  try {
    if(Object.keys(req.body).length === 0) {
      const listatecnicas = await db.findAll();
      res.render('assistente', { title: 'Lista de Tecnicas', listatecnicas });
    }
  else {

      const query = Object.values(req.body);
      const listatecnicas = await db.findExpressao(query);
      console.log('return ' + listatecnicas + ' query ' + query);
      res.render('assistente', { title: 'Lista de Tecnicas', listatecnicas });

    }
  } catch (err) {
    next(err);
  }  
})

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.deleteOne(id);
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
})

router.post('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = parseInt(req.body.age);

  try {
    const result = await db.update(id, { name, age });
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
})


module.exports = router;