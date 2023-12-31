import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"; // ES6

const Blogs = ({ handleAddToBookmark, handleMarkAssRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {/* <h2 className="text-3xl">Blogs: {blogs.length}</h2> */}
      {blogs.map((blog) => (
        <Blog
          handleMarkAssRead={handleMarkAssRead}
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAssRead: PropTypes.func.isRequired,
};

export default Blogs;
