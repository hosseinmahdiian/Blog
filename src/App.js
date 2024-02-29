import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/bolog/BlogPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Authors/:slug" element={<AuthorPage />} />
        <Route path="blogs/:slug" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
