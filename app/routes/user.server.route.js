var crypto = require('crypto');
var express = require('express');
module.exports = function (app) {

    var Users = require('./controllers/user.server.controller');
    app.use('/', express.static('./public'));


    app.get('/', function (req, res) {
        if (req.session.user) {
            res.render('index', {
                username: req.session.username,
                msg: req.session.msg
            });
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/');
        }
    });
    
    
    /**
    app.get('/user', function (req, res) {
        if (req.session.user) {
            res.render('user', {
                msg: req.session.msg
            });
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/login');
        }
    });
    app.get('/register', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('register', {
            msg: req.session.msg
        });
    });
    app.get('/login', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('login', {
            msg: req.session.msg
        });
    });
    app.get('/logout', function (req, res) {
        req.session.destroy(function () {
            res.redirect('/login');
        });
    });

    app.post('/register', Users.signup);
    app.post('/user/update', Users.updateUser);
    app.post('/user/delete', Users.deleteUser);
    app.post('/login', Users.login);
    app.get('/user/profile', Users.getUserProfile);
    */
};