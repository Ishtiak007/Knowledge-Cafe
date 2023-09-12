import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog ,handleAddToBookmarks,handleMarkAsRead}) => {
    const {id,title,Author,Author_img,cover,Posted_Date,Reading_Time,Hashtags}=blog
    return (
    <div className='mb-20 space-y-4'>
        <img className='w-[100%] mb-8 rounded-lg' src={cover} alt={`cover picture of the title${title}`} />
        <div className='flex justify-between my-4 '>
            <div className='flex gap-6 mb-4'>
                <img className='w-14' src={Author_img} alt="" />               
                <div>
                <h3 className='text-2xl '>{Author}</h3>
                <p>{Posted_Date}</p>
                </div>
            </div>
            <div className='flex flex-row gap-5 items-center'>
                <span className='bg-slate-700 p-2 text-white rounded-md'>{Reading_Time} Min Read</span>
                <button onClick={()=>handleAddToBookmarks(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
            </div>
        </div>
        <h1 className='text-3xl mb-4'>{title}</h1>
        <p>
        {
            Hashtags.map((hash,idx)=><span key={idx}><a className='text-blue-800 m-2' href="">{hash}</a></span>)
        }
        </p>
        <button onClick={()=>handleMarkAsRead(id,Reading_Time)} className='underline text-blue-600'>Mark As Read</button>
    </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    handleMarkAsRead : PropTypes.func
  };
export default Blog;