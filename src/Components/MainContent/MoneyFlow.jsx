import React from 'react'
import '../../Styles/MainContent/MoneyFlow.css'
const MoneyFlow = () => {

  const Data=[
    {x:'',y:'$0k'},
    {x:'25k',y:'Jan'},
    {x:'50k',y:'Feb'},
    {x:'75k',y:'Mar'},
    {x:'100k',y:'Apr'},
    {x:'',y:'May'},
    {x:'',y:'Jun'},
  ]

  return (
    <div className='MoneyFlow'>
      <div className='header'>Money Flow 
        <span>6 months</span>
        <span>Money Flow</span>
        
      </div>
      <div>
        <div className='axis'>
          <div className='x-label'>
        {Data.map((list, index) => (
           <div className='x' key={index} >{list.x}</div>
             ))}
      </div>
      <span><img src='bargraph.png' height={'200em'}/></span>
</div>
<div className='y-label'>
        {Data.map((list, index) => (
           <div className='y' key={index} >{list.y}</div>
             ))}

      </div>
        </div>
    </div>
  )
}

export default MoneyFlow