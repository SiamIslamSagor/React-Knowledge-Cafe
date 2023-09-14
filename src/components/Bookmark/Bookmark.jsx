import PropTypes from "prop-types"; // ES6

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white p-4 m-4 rounded-md">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
