import React from 'react';

// React Router imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Component import
import Header from './components/header';

// Pages imports
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
