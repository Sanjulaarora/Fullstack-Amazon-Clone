import React from 'react';
import './buynow.css';
//forremovemedia

const Option = () => {
  return (
    <div className='add_remove_select'>
      <select className='add_remove_select'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <p style={{cursor:'pointer'}}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save or Later</p><span>|</span>
      <p className='forremovemedia'>See more like this</p>
    </div>
  )
}

export default Option;