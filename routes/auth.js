const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @route   GET /api/auth/test
// @desc    Test the auth route
// @access  Public
router.get('/test', (req, res) => {
    res.send("Auth route working!");
});

// @route   POST /api/auth/register
// @desc    Create a new user
// @access  Public
router.post('/register', async (req, res) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        // Create a new user
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Return the new user
        return res.json(savedUser);

    } catch (error) {
        console.log(error);

        return res.status(500).send(error.message);
    }
});

module.exports = router;