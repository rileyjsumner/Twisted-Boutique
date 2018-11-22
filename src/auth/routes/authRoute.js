var express = require('express');
var router = express.Router();

router.get('/ProductList', function(req, res) {
    var db  = req.db;
    var collection = db.get('productListTest');
    collection.find({},{},function(e, docs) {
        res.json(docs);
    });
});
router.post('/Login', function(req, res) {
    var db = req.db;
    var collection = db.get('userList');
    collection.find();
});
router.post('/CreateAccount', function(req, res) {
    var db = req.db;
    var collection = db.get('userList');
    collection.insert(req.body, function(err, result){
    res.send(
        (err === null) ? { msg: '' } : { msg: err }
        );
    });
});
module.exports = router;
