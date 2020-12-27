const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({extended: false}));

router.get('/',(req,res,next)=>{
  
})

router.post('/', (req,res,next)=>{
    if(!req.body.content){
        console.log("Content param not sent with request.")
        return res.sendStatus(400);
    }
    var postData = {
        content: req.body.content, //this is the data posted from the client
        postedBy: req.session.user //this is the user data
    }
    Post.create(postData) //postData created
    .then(newPost=>{//then is resolved (successful), newPost will be just the postData
        console.log(newPost.postedBy.profilePic) //log this, to get the profile pic
        res.status(201).send(newPost)
    })
    .catch(error=>{
        console.log(error);
        res.sendStatus(400);
    })

})

module.exports = router;