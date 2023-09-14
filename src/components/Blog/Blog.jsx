import PropTypes from "prop-types"; // ES6
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    posted_date,
    hashtags,
    cover,
    reading_time,
    author,
    author_img,
  } = blog;
  return (
    <div className="my-10">
      <img
        className="w-full my-6 rounded-md"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-gray-400">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-gray-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {hashtags.map((has, index) => (
        <span className="text-gray-500" key={index}>
          <a href=""> #{has}</a>
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
