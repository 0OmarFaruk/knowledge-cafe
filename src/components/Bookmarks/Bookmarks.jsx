import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark.jsx';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 m-4 p-4 text-center">
            <h2 className="text-3xl">Bookmarks Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.object.isRequired
}

export default Bookmarks;