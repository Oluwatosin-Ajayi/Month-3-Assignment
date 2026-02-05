// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { posts } from "../Components/BlogPost";

function Home() {
  return (
    <>
      <div>
        <div className="home-page">
          <h1 className="home-title">Beginners Guide to Records management</h1>
        </div>
        <div className="main-container">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <Link to={`/posts/${post.id}`} className="read-more-link">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
