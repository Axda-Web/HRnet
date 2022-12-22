import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import CreateEmployee from './pages/create-employee'
import Error from './pages/error'
import EmpoyeeList from './pages/employee-list'


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/employee-list' element={<EmpoyeeList />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
