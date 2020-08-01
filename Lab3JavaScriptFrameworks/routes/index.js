'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'MY Family Info' });
});

router.get('/gurinder', function (req, res) {
    res.render('gurinder', { title: 'Gurinder Singh\'s information' });
});

router.get('/balwinder', function (req, res) {
    res.render('balwinder', { title: 'Balwinder Singh\'s info' });
});

router.get('/baljinder', function (req, res) {
    res.render('baljinder', { title: 'Baljinder kaur\'s info' });
});

module.exports = router;
