// Import necessary modules
const express = require("express");
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { User, Chat } = require("../../models");
const bcrypt = require("bcrypt");
const { getCookies } = require("../../utils/helpers");

// Route to render login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Route for logging in
router.post("/login", [
  // Validate that username and password are not empty
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  // Check validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are validation errors, return them
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Find user by username
    const user = await User.findOne({where: {username: req.body.username}});
    if (!user) {
      // If user not found, return error
      res.status(401).json({message: "Login failed. User not found."});
      return;
    }
    const userData = user.get({ plain: true });
    // Check if password is valid
    console.log(req.body.password, userData.password)
    const validPassword = await bcrypt.compare(req.body.password, userData.password);

    if (!validPassword) {
      // If password is not valid, return error
      res.status(401).json({message: "Login failed. Password incorrect."});
      return;
    }

    // If login is successful, set user in session
    req.session.user = {
      id: userData.id,
      username: userData.username
    };
    console.log(req.session.id) 
    // Send success message
    res.json({message: 'You are now logged in.'});
  } catch (err) {
    // If there's an error, return it
    res.status(500).json(err);
  }
});

// Route for signing up
router.post("/signup", async (req, res) => {
  // Handle signup...
  try {
    // Check if username already exists
    const existingUser = await User.findOne({ where: { username: req.body.username } });
    if (existingUser) {
      // If username exists, return error
      res.status(400).json({ message: 'Signup failed. Username already exists.' });
      return;
    }

    // Hash the password
    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create new user
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    // Set user in session
    req.session.user = {
      id: newUser.id,
      username: newUser.username
    };

    // Send success message
    res.json({ message: 'Signed up and logged in.' });
  } catch (err) {
    // If there's an error, return it
    res.status(500).json(err); 
  }
});

// Route for logging out
router.get("/logout", (req, res) => {
  if (req.session) {
    // If there's a session, destroy it
    req.session.destroy((err) => {
      if (err) {
        // If there's an error, return it
        res.status(500).json({message: 'Could not log out. Please try again.'});
      } else {
        // Send success message
        res.json({message: 'Logged out.'});
      }
    });
  } else {
    // If there's no session, return message
    res.json({message: 'No user to log out.'});
  }
});

// Route to get user by id
router.get("/:id", async (req, res) => {
  console.log('GET/:id', req.session.user)
  try {
    console.log('About to query User');

    // Find user by id
    const user= await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: { exclude: ["password"] },
    });
    if (user) {
      // If user is found, return user data
      const userData = user.get({ plain: true }); 
      res.json(userData);
    } else {
      // If user is not found, return error
      res.status(404).json({ message: 'user not found' });
    }
  }catch (err) {
    // If there's an error, return it
    console.error('Error in GET /:id:', err);
    res.status(500).json(err);
  }
})

// Route to get current user
router.get("/", async (req, res) => {
  try {
    const sessionUser = req.session.user;
    // Find user by id from session
    const userData = await User.findOne({
      where: {
        id: sessionUser.id,
      },
      attributes: { exclude: ["password"] },
    });
    // Return user data
    res.json(userData);
  } catch (err) {
    // If there's an error, return it
    res.status(500).json(err);
  }
});

// Route for deleting a user
router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      // If user is not found, return error
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    // Delete user
    await User.destroy({
      where: {
        id: req.params.id
      }
    });

    // Send success message
    res.json({ message: 'User deleted.' });
  } catch (err) {
    // If there's an error, return it
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;