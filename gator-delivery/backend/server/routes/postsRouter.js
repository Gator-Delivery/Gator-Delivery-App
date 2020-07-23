import * as posts from '../controllers/postsController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const postsRouter = express.Router();

postsRouter.post('/add', posts.create);
postsRouter.get('/', posts.list);

postsRouter.get('/:postId', posts.read);
postsRouter.delete('/:postId', posts.remove)
export default postsRouter;
