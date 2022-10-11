import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

export const SearchContext = React.createContext('')


function App() {
  return (
    <>
      <Routes>
        <Route path=''  element={
          <React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <Home />
          </React.Suspense>
        }/>
        <Route path='cart'  element={
          <React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <Cart />
          </React.Suspense>
        }/>
        <Route path='pizza/:id'  element={
          <React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <FullPizza />
          </React.Suspense>
        }/>
        <Route path='not-found'  element={
          <React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </React.Suspense>
        }/>
      </Routes>
    </>
  );
}

export default App;
