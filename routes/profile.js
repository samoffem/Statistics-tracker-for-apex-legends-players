const express =require('express')
const router = express.Router();
const fetch = require('node-fetch')


router.get('/:platform/:gamertag', (req, res)=>{
   
    const headers = {
        'TRN-Api-key': process.env.TRACKER_API_KEY
    }
    const {platform, gamertag} = req.params;

    fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,{
        headers
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=> {
        if (data.errors && data.errors.length >0){
            return res.status(404).json({
                message: 'Profile not found'
            })
        }
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"server error"
        })
    })

        
   
})

module.exports = router