// fixed className that was confusing 
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const publicFile = "http://localhost:2000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={publicFile + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
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
      <p className="postDescription">{post.descriptions}</p>
    </div>
  );
}