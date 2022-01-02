import React from 'react';
import { useState } from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { getMonth } from './util'
import SideBody from './components/Sidebody';


function App() {
  const [currentMonth, setCurentMonth] = useState(getMonth())
  console.table (getMonth(3));
  return (
    <React.Fragment>
            <div className='bg-blue h-screen flex flex-col'>
               <Topbar className= "bg-dark"/>
               
               <div className='mt-10 shadow-lg shadow-indigo-500/40 px-96 flex flex-1 flex-col content-center'>
               {/* <div className='w-7/12  flex flex-1 flex-col justify-center'></div> */}
                   <CalendarHeader/>
                   <Sidebar/>
                   <div className='flex flex-1 ' >
                     
                     <Month  month = {currentMonth}/>
                    
                   </div> 
               </div>
               
           </div>
    </React.Fragment>
  );
}

export default App;
