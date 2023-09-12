import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import { useState } from 'react'

function App() {
  const [bookmarks , setBookmarks] = useState([])
  const handleBookmark = blog => {
    const newBookmark = [...bookmarks , blog]
    setBookmarks(newBookmark);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
