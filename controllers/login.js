const db = require('../database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


exports.login = (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body

    if (!email || !password) {
        return res.render('login', {
            error: `Please input Email/Password`
        })
    } else {

        
        db.query(`select * from patients where email = ? `, [email], async (err, result) => {
            if (err) {
                console.log(err);

            } 
            if (!result[0] || !await bcrypt.compare(password, result[0].password)) {
                return res.render(`login`, {
                    error: `Invalid Email or password`
                })
            }
            else {
                const id = result[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log('The token is: ' + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                };

                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/dashboard');
            }
        })
    }
}


