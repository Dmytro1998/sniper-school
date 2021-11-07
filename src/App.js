import React from 'react';
import Layout from './core/layoutapp';
// import { Route,  Routes, } from 'react-router-dom';
 import {Switch, Routes,Route} from 'react-router-dom'
import CoursesComponent from './core/courses';



const App = () => {
  return (
    <Layout>
      <Routes>
      <Route path="/courses" component={<CoursesComponent/>} />

      


        
      </Routes>
    </Layout>
  );
}

export default App;
