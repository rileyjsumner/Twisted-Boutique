var express = require('express');
var router = express.Router();

router.get('/ProductList', function(req, res) {
    var db  = req.db;
    var collection = db.get('productListTest');
    collection.find({},{},function(e, docs) {
        res.json(docs);
    });
});
router.post('/NewProduct', function(req, res) {
    var db = req.db;
    var collection = db.get('productListTest');
    collection.insert(req.body, function(err, result){
    res.send(
        (err === null) ? { msg: '' } : { msg: err }
        );
    });
});
module.exports = router;
