const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/doctorlogin', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/doctorlogout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/doctorlogin');
    });
});

module.exports = router;