var IndexController = {
            home: function (req, res) {
                    res.render("index");
                  },
            assistente: function (req, res) {
                    res.redirect("/assistente");
               }
    };
module.exports = IndexController;

