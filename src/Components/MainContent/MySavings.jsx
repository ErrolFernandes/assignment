import React from 'react'
import '../../Styles/MainContent/MySavings.css'

const MySavings = () => {

  const Data=[
    {name:'Gaming PC',value:'309'},
    {name:'New house',value:'950'},
    {name:'Summer trip',value:'550'},
    {name:'Wedding',value:'620'},
    {name:'Top up game',value:'170'}
  ];

  return (
    <>
    <div className='MySavings'>
      <div>My Savings
    <a>view all</a></div>
    <div className='list-section'>
      {Data.map((list, index) => (
        <div  key={index} >
          <span className='listname'>{list.name}</span>
          <span className='listvalue'>${list.value}</span>
          <div className='progress-bar' >
            <progress value={list.value} max='1000' style={{height:'10px'}}></progress>
          
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default MySavings