import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./Components/Error";
import "./Styling/index.css";

const Home = lazy(() => import("./Components/HomePage"));
const PostDetail = lazy(() => import("./Components/PostDetails"));
const NotFound = lazy(() => import("./Components/notfound"));
const Header = lazy(() => import("./Components/NavBar"));
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
