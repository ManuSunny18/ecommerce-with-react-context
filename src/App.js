import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/app.context.js';
import Dummy from './components/dummy.js';
import Header from './layout/header.js';
import Home from './pages/home.js';
import Search from './pages/search.js';
import Category from './pages/category.js';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/category/:categoryType" element={<Category />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
