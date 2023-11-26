import React from 'react'
import '../../Styles/MainContent/AllExpenses.css'

const AllExpenses = () => {

  const Data=[
    {name:'Daily',value:'475'},
    {name:'Weekly',value:'3,327'},
    {name:'Monthly',value:'12.121'},
    
  ]

  const Info=[
    {name:'Shopping',value:'#00B3FF'},
    {name:'Workspace',value:'#AFAFAF'},
    {name:'Platform',value:'#3B3F48'},
    {name:'Entertainments',value:'#76D9DF'}
  ]

  return (
    <>
    <div className='AllExpenses'>All Expenses
    <span className='six-months'>6 months</span>
    <div>
      <div className='data'>
    {Data.map((list, index) => (
        <span  key={index} >
          <p className='listname'>{list.name}</p>
          <p className='list-value'>${list.value}</p>
        </span>
      ))}
      </div>
      <img src='pie.png'/>
    
    <span className='chart-info'>
    {Info.map((list, index) => (
        <div  key={index} className='details'>
          <span style={{backgroundColor:`${list.value}`}}> </span>
          {list.name}
          
        </div>
      ))}
      </span>
      </div>
    </div>
   
    </>
    )
}

export default AllExpenses