import express from "express";
import { getFeedPosts, getUserPosts, likePost, addComment, getComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// POST
/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

// COMMENT
/** CREATE */
router.route("/:postId/comments")
    .get(verifyToken, getComment)
    .post(verifyToken, addComment);

export default router;
