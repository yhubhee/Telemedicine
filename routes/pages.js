const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/logout', (req, res)=>{
    res.render('login')
})
router.get('/features', (req, res) => {
    res.render('features');
});
router.get('/creataccount', (req, res) => {
    res.render('register');
});
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/pre-dashboard', (req, res)=>{
    res.render('pre-dashboard')
})
router.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})
router.get('/doctorsignup', (req, res) => {
    res.render('doctorsignup');
});
router.get('/doctorlogin', (req, res) => {
    res.render('doctorlogin');
});
router.get('/doctordashboard', (req, res)=>{
    res.render('doctordashboard')
})





module.exports = router