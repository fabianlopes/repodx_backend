/*
function simplify(text){
    const separators = /[s,.;:()//-//'+]/g;
    const diacritics = /[u0300-u036f]/g;
    //capitalização e normalização
    text = text.toUpperCase().normalize("NFD").replace(diacritics, "");
    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos);
    console.log(arr);
    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item));
}
 
function generateTags(tecnica){
    let tags = [];

    tags.push(...simplify(tecnica.ID));        
    tags.push(...simplify(tecnica.nome));
    tags.push(...simplify(tecnica.resumo));
    tags.push(...simplify(tecnica.metodo));
    tags.push(...simplify(tecnica.contexto));
    tags.push(...simplify(tecnica.utilizacao));
    
    return tags;
}
 
function updateTecnicas(tecnicas){
    tecnicas.map((tecnica) => {
        console.log(typeof tecnica + ' ' + tecnica.ID);
        tecnica.tags = generateTags(tecnica);
        global.conn.collection('tecnicas_tag').insertOne(tecnica);
    })
}
 
function findAllTecnicas(){
    return global.conn.collection('tecnicas').find().toArray();
}
 
//const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect()
    .then(conn => {
        global.conn = client.db('RepoDX');
        return findAllTecnicas();
    })
    .then(arr => updateTecnicas(arr))
    .catch(err => console.log(err));


var express = require('express');
var router = express.Router();
 
function simplify(text){
    const separators = /[s,.;:()-'+]/g;
    const diacritics = /[u0300-u036f]/g;
    //capitalização e normalização
    text = text.toUpperCase().normalize("NFD").replace(diacritics, "");
    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos);
    console.log(arr);
    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item));
}
 
/* GET home page. 
router.get('/', function(req, res, next) {
    if(!req.query.q)
      return res.render('index', { title: 'Motor de Busca', movies: [], query: '' });
    else {
      const query = simplify(req.query.q);
      const MongoClient = require("mongodb").MongoClient;
      const client = new MongoClient("mongodb://127.0.0.1:27017");
      client.connect()
                 .then(conn => client.db("netflix"))
                 .then(db => db.collection("movies2").find({tags: {$all: query }}))
                 .then(cursor => cursor.toArray())
                 .then(movies => {
                   return res.render('index', {title: 'Motor de Busca', movies, query: req.query.q});
                 })
    }
  });
   
  module.exports = router;    
  senha mongodb atlas ZzQU36GUEIqnxRay
  */