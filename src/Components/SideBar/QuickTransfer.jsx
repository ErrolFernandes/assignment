import React from 'react'
import '../../Styles/SideBar/SideBar.css'

const QuickTransfer = () => {
  const repeat = Array.from({ length: 6 });
  return (
    <>
    <div className='quick-transfer'>QuickTransfer</div>
    <div className='prof'>
    {repeat.map((_, index) => (
      <span className='profiles' key={index} >
                &nbsp;
        </span>
    ))}
    <span>{'>'}</span>
    </div>
    <label className='name'>Card number</label>
    <input className='cardnumber' value={'1234 2345 7379 90'}/>
    <div className='buttons'>
      <button>Send Money</button>
    <button>Save as Draft</button>
    </div>
    </>
  )
}

export default QuickTransfer