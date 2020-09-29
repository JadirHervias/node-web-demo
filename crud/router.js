const {read, write, count, searchBy} = require("../data/fileMapper.js");
const {Shop , Contact} = require("../data/models.js");
const html = require("../templates/index.js");

const router = function(req, res){

    switch(req.url){
        case '/contac':
            const shops = read("contacts");
            let title = "Hola html";
            res.write(html(title, shops));
            res.end();
            break;
        case '/nosotros':
            page = "index.html";
            break;
        default:
            page = "index.html";
            break;
        
    }
}

module.exports = router;