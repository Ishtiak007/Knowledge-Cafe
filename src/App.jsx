import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0)
  const handleMarkAsRead =(id,time) =>{
    const newTime = readingTime+time;
    setReadingTime(newTime);
    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !==id)
    setBookmarks(remainingBookmarks);
  }
  const handleAddToBookmarks = blog=>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
   <header>
   <Header></Header>
   </header>
    <main className="md:flex max-w-7xl mx-auto gap-7">
    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </main>
    </>
  )
}

export default App
