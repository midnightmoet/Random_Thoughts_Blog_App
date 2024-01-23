import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const publicFile = "http://localhost:2000/images/";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={`${publicFile}${post.photo}`} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span key={c._id} className="postCategory">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
};

export default Post;

// Cleaned up code 1/23/24