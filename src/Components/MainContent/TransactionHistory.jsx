import React from 'react'
import '../../Styles/MainContent/TransactionHistory.css'


const TransactionHistory = () => {

  const History=[
    {name:'Order Revenue',date:'Apr 27,22',value:'+$874',color:'green'},
    {name:'Withrawal initiated',date:'Apr 25,22',value:'-$2490',color:'red'},
    {name:'Order Revenue',date:'Mar 1,22',value:'+$126',color:'green'}
  ]

  return (
    <>
    <div className='TransactionHistory'>
    Transaction History <a>view all</a>
    <div className='mid-layer'>
    {History.map((list, index) => (
        <div  key={index} className='History-details'>
          <span className='History-name'>{list.name}</span>
          <span className='History-value' style={{color: `${list.color}`}}>{list.value}</span>
          <p className='History-date'>{list.date}</p>
    
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default TransactionHistory