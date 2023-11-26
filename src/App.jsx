import './Styles/App.css'
import './Styles/SideBar/SideBar.css'
import './Styles/MainContent/MainContent.css'

import NavBar from './Components/NavBar/NavBar'

import CardDetails from './Components/SideBar/CardDetails';
import QuickTransfer from './Components/SideBar/QuickTransfer';

import DataCards from './Components/Card/DataCards';

import  AllExpenses from './Components/MainContent/AllExpenses';
import MoneyFlow from './Components/MainContent/MoneyFlow';

import MySavings from './Components/MainContent/MySavings';
import TransactionHistory from './Components/MainContent/TransactionHistory';





function App() {
  

  return (
    <>
     <div className='NavBar'>
      <NavBar/>
     </div>

    <div className='Dashboard'>
     <div className='SideBar'>
          <CardDetails/>
          <QuickTransfer/>
     </div>
<div className='Main'>
    <div className='Card'>
      <DataCards />
    </div>

     <div className='MainContent'>
          
          <MoneyFlow/>
          <MySavings/>
          <AllExpenses/> 
          <TransactionHistory/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
