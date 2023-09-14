import PropTypes from "prop-types"; // ES6

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};

export default Bookmarks;
