import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound'>
        <p className='notfound_text'>O O P S !</p>
        <p className='notfound_number'>404</p>
        <p className="notfound_l-text">PAGE NOT FOUND</p>
        <Link to={"/"} className='notfound_btn'>Back to home</Link>
    </div>
  )
}

export default NotFound;