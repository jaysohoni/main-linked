const mongoose = require('mongoose') 

const challengeSchema = mongoose.Schema( 
    { 
        challenge:{ 
            type: String 
        }, 
    }, 

    { 
        timestamps: true
    } 

) 

const Challenge = mongoose.model('Challenge', challengeSchema)
module.exports = Challenge; 