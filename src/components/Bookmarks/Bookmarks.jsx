import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark.jsx';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 m-4 p-4 text-center">
            <div >
                <h3 className="text-4xl bg-purple-300 rounded m-4 p-4">Spend Time :{readingTime}</h3>
            </div>
            <div >
                
                <h2 className="text-3xl">Bookmarks Blogs:{bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.object.isRequired
}
Bookmarks.propTypes = {
    readingTime : PropTypes.number.isRequired
}

export default Bookmarks;