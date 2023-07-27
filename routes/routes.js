const express = require('express');
const router = express.Router();
const Video = require('../models/songs');

router.post('/post', (req, res) => {
    const video = new Video({
        username : req.body.username,
        comment : req.body.comment,
        videoID : req.body.videoID
    })

    try {
        const videotoSave = video.save();
        res.status(200).json(videotoSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getVideo', async (req, res) => {
    try{
        const video = await Video.find();
        res.json(video)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
});

module.exports = router;