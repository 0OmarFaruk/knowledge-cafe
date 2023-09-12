import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} =bookmark;
    return (
        <div className='bg-gray-300 border-red-400 rounded m-10 p-10'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}
export default Bookmark;