import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AppProvider } from './context/app.context.js';
import Dummy from './components/dummy.js';
import Header from './layout/header.js';
import Home from './pages/home.js';
import Search from './pages/search.js';
import Category from './pages/category.js';
import './style.css';

const AppWrapper = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/category/:categoryType" element={<Category />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <AppWrapper />
      </AppProvider>
    </BrowserRouter>
  );
}
