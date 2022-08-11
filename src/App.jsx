import React from 'react';
import Router from './Router/router.jsx'
import AsideList from './components/Aside/Aside-list'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

export default () => {
  return (
    <BrowserRouter>
    <>
      <h1>Component App</h1>
      <div className="app">
        <div>
          <AsideList />
        </div>

        <div className='routes'>
          <Router />
        </div>
      </div>
    </>
    </BrowserRouter>
  )
}
