const express = require('express');
const router = express.Router();
const Songs = require('../models/songs');

router.post('/post', (req, res) => {
    const songs = new Songs({
        title : req.body.title,
        artist : req.body.artist
    })

    try {
        const songsToSave = songs.save();
        res.status(200).json(songsToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;