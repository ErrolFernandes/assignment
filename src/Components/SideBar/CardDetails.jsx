import React from 'react'
import '../../Styles/SideBar/SideBar.css'
const CardDetails = () => {

  const cardData = [
    { name: 'Your Balance', value: '$128,320',profit:'23.19%',loss:'23.19%'},
    { name: 'Currency', value: 'USD/US Dollar' ,profit:'',loss:''},
    
    
  ];

  return (
    <div className='my-card'>My Card
      <img src='/Credit card mockup.png' className='img' />
      <div className='cardinfo'>
      {cardData.map((card, index) => (
        <div className="cardset" key={index} >
          <p className='name'>{card.name}</p>
          <p className='value'>{card.value} <span style={{color:'#E74A51'}}>{card.profit}</span>
                                             <span style={{color:'#2DD683'}}>{card.loss}</span> </p>
        </div>
      ))}
      
      </div>
      <button className='add-card'><span>+</span>Add card</button>
      </div>
    
  )
}

export default CardDetails