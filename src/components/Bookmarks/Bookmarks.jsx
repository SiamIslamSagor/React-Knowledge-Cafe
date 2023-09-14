import PropTypes from "prop-types"; // ES6
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 rounded-xl ml-4 mt-2 pt-4">
      <div className=" bg-blue-100 p-4 rounded-md border border-blue-600">
        <h3 className="text-3xl m-2 ">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className=" bg-gray-200 my-4 py-4 rounded-lg">
        <h2 className="text-3xl text-center ">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
