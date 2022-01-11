let express = require('express');
let router = express.Router();

let Notices = require('../models/article');
router.get("/", function (req, res, next) {
    Notices.find({}, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    });
});
module.exports = router;