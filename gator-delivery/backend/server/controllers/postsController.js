/* Dependencies */
import Post from "../models/PostModel.js";

export const create = async (req, res) => {
    var currDate = new Date();
    let newPost = new Post({
        text: req.body.text,
        date: currDate
    });
    await newPost.save(function(err) {
        if (err) return res.status(400).send(err);
        res.json(newPost);
    });
};

/* Retreive all the posts*/
export const list = (req, res) => {
  Post.find({}).exec(function (err, post) {
    if (err) return res.status(400).send(err);
    res.json(post);
  });
};

export const read = (req, res) => {
 
    Post.findById(req.params.postId)
    .then(posts => {
        res.send(posts);
        res.status(404).send(err);
    })
};

export const update = async (req, res) => {
    const post = await Post.findById(req.params.postId).catch(err => {
        res.status(404).send(err);
    });
    
    if (req.body.text) {
        post.text = req.body.text;
    }

    if (req.body.timestamp) {
        post.timestamp = req.body.timestamp;
    }

    post.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(404).send(err);
    });
};

/* Delete a post */
export const remove = (req, res) => { 
    Post.findByIdAndDelete(req.params.postId)
        .then(posts => {
            res.send(posts);
        }).catch(err => {
            res.status(404).send(err);
        }); 
};

