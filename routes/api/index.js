const express = require('express');
const users = express.Router();
// const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Load input validation
const validateLoginInput = require("./../../validation/login");

const User = require('../../models/signin');
// users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password
  }

  User.findOne({
    username: req.body.username
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.username + ' is Registered!' });
            })
            .catch(err => {
              res.send('Error: ' + err);
            })
        })
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch(err => {
      res.send('Error: ' + err);
    });
});

users.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);
  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  // find user by username
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(404).json({ usernamenotfound: 'Username not found' })
    }
    // check pw
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
            _id: user._id,
            username: user.username
        };

        // sign token
        jwt.sign(payload, keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          })
      } else {
        return res
          .status(400).json({ passwordincorrect: "Password incorrect" });
      }
    })
  });



  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // User.findOne({
  //   username: req.body.username
  // })
  //   .then(user => {
  //     if (user) {
  //       if (bcrypt.compareSync(req.body.password, user.password)) {
  //         const payload = {
  //           _id: user._id,
  //           username: user.username
  //         }
  //         let token = jwt.sign(payload, process.env.SECRET_KEY, {
  //           expiresIn: 1400
  //         });
  //         console.log(token);
  //         res.send('Token' + token)
  //         res.json('User exist! Token is ' + token)
  //       } else {
  //         res.json({ error: 'User does not exist' });
  //       }
  //     } else {
  //       res.json({ error: 'User does not exist' });
  //     }
  //   })
  //   .catch(err => {
  //     res.send('Error: ' + err);
  //   });
});

users.get('/employer', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

  User.findOne({
    username: decoded.username
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.json({ error: 'User does not exist' });
      }
    })
    .catch(err => {
      res.send('Error: ' + err);
    });
});

module.exports = users;