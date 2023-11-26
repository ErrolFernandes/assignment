import React from 'react'
import '../../Styles/Card/Cardlist.css'

const DataCards = () => {

  const cardData = [
    { name: 'My Balance', number: '$128,320',color:'#00B3FF' },
    { name: 'Income', number: '$128,320' ,color:'#2DD683'},
    { name: 'Savings', number: '$128,320' ,color:'#FED142'},
    { name: 'Expense', number: '$128,320',color:'#FA8B3A' },
  ];

  
  return (
    <div className="CardList">
      {cardData.map((card, index) => (
        <div className="card" key={index} style={{borderLeft: `6px solid ${card.color}`}}>
          <p className='name'>{card.name}</p>
          <p className='number'>{card.number}</p>
        </div>
      ))}
    </div>
  )
}

export default DataCards