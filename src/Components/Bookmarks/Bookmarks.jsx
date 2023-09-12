import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='bg-gray-100 rounded-xl mt-10'>
      <div className=' text-white mb-2 rounded-lg'>
      <h1 className='text-3xl text-center rounded-3xl bg-slate-500 text-white p-3 '>Reading Time : {readingTime}</h1> 
      </div>
        <h2 className="text-3xl text-center rounded-3xl bg-blue-600 text-white p-3 ">Bookmarked Blog : {bookmarks.length}</h2>
        {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
  
}

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks