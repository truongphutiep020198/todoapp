import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from 'components/home/Home';
import AddTask from 'components/addtask/AddTask';
import EditTask from 'components/edittask/EditTask';
import { GlobalProvider } from 'context/GlobalState';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddTask />} />
            <Route path='/edit:id' element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
