var AssistenteController = {
    listar: function (req, res) {
        (async () => {
            const db = require("../db");
            console.log('conectou no mongoDB');                
            try {
                const listatecnicas = await db.findAll();
                res.render('assistente', { title: 'RepoDX', listatecnicas });
                } catch (err) {
                next(err);
                }
                //res.redirect("/listar");
            })(); },             
    };
    
module.exports = AssistenteController;
