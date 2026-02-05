// Blog details page
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../Components/BlogPost";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    throw new Error("Post not found");
  }

  return (
    <div className="blog-details">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Home
      </button>
      <h2 className="blog-title">{post.title}</h2>
      <div>
        <img
          src={post.img}
          alt="A Records Management Image"
          className="blog-image"
        />
      </div>
      <div>
        <p className="blog-image-message">{post.image}</p>
      </div>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}

export default PostDetail;
