import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark ,handleMarkAsRead}) => {
    console.log(blog);
    const {title,cover,author,author_img,posted_date,reading_time,hashtag} = blog;
    return (
        <div className='m-10'>
            <img className='' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-7'>
                <div className='flex items-center'>
                    <img className='rounded-full w-20 h-20' src={author_img} alt="" />
                    <div className='pl-5'>
                        <h3 className="text-2xl">{author}</h3>
                        <p className="text-xl">{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className="text-xl">{reading_time} min read </p>
                    <button onClick={() =>handleBookmark(blog)} className='ml-3 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-5">{title}</h2>
            <p className="text-xl mt-5">
                {
                    hashtag.map((hash , idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
            <div className='mt-7'>
                 <button onClick={() =>handleMarkAsRead(reading_time)} className='text-blue-600 border-b-2'>Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired
}
Blog.propTypes = {
    handleBookmark : PropTypes.func.isRequired
}
Blog.propTypes = {
    handleMarkAsRead : PropTypes.func.isRequired
}
export default Blog;