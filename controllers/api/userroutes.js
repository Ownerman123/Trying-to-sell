const express = require("express");
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { User, Listing } = require("../../models");
const bcrypt = require("bcrypt");
const session = require('express-session');

// Route to render login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Route for logging in
router.post("/login", [
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(401).json({ message: "Login failed. User not found." });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Login failed. Password incorrect." });
    }
    req.session.user_id = user.id;
    req.session.user = { id: user.id, username: user.username };
    req.session.user_id = user.id; 
    req.session.logged_in = true;

    res.json({ message: 'You are now logged in.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for signing up
router.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ where: { username: req.body.username } });
    if (existingUser) { console.log(existingUser)
      return res.status(400).json({ message: 'Signup failed. Username already exists.' , user: existingUser });
    }



    


    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,

      password: req.body.password,

    });
    req.session.user_id = newUser.id;
    req.session.user = { id: newUser.id, username: newUser.username };
    req.session.logged_in = true;

    res.status(200).json({ message: 'Signed up and logged in.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for logging out
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Could not log out. Please try again.' });
      }
      res.json({ message: 'Logged out.' });
    });
  } else {
    res.json({ message: 'No user to log out.' });
  }
});

// Route to render profile page
router.get("/profile", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect('/login');
  }

  try {
    const user = await User.findOne({
      where: { id: req.session.user.id },
      include: [{ model: Listing }],
      attributes: { exclude: ["password"] }
    });

    const listingData = await Listing.findAll({
      where: { user_id: req.session.user.id },
      include: [
        {
          model: User,
          attributes: ['name'], // Only include the user's name
        },
      ],
      order: [["createdAt", "DESC"]] // Assuming you want the newest posts first
    });

console.log(user.listings)
const listings = listingData.map((listing) => listing.get({ plain: true }));
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.render("profile", { user: user.get({ plain: true }), logged_in: req.session.logged_in, listings });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["password"] }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get current user
router.get("/", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const user = await User.findOne({
      where: { id: req.session.user.id },
      attributes: { exclude: ["password"] }
    });

    res.json(user.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for deleting a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    await User.destroy({ where: { id: req.params.id } });

    res.json({ message: 'User deleted.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
