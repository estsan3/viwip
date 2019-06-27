const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email no encontrado" });
            }
            if (password == user.password) {
                console.log("SUCCESS BACKEND!!")
                res.json({
                    success: true,
                    user: email
                });
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Contraseña incorrecta" });
            }
        });
     
});


router.post('/add', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(asset => {
      console.log('user Saved')
      res.json(user)})  
  });

module.exports = router;
