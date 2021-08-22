const gif = require('./gifModel.js');

const gifController = {

    createGif(req, res) {
        console.log(req);
        
        //convert wav to binary (64 bit) Buffer to store in DB
        let audioBuff = new Buffer(req.body.audio, 'base64');

        gif.create({
            title: req.body.title,
            gifURL: req.body.gifURL,
            audio: audioBuff,
            likeCount: req.body.likeCount,
            creator: req.body.creator,
            sendURL: req.body.sendURL,
        },(err, result) => {
            if(err) console.log(err);
            console.log('GIF RESULT FROM CREATE GIF ', result);
            return res.send('Gif has been saved');
        })
    },

    sendGifs(req, res) {
       gif.find({}, (err, result) => {
           if (!result) {
               return res.status(404).json("No result found");
           } else {
               return res.status(200).json(result);
           }
       }) 
    }

}

module.exports = gifController