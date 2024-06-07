const express = require('express');

const router = express.Router();


router.get('/',  async (req, res) => {

    try{
    res.render('homepage', {
        // objects for info to dynamically put to the page
    });
} catch (err) {
    res.status(500).json(err);
    console.log('dang')
}


});

module.exports = router;