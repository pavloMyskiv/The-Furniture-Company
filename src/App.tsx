/** @format */

import React from 'react';
import Header from './ui/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './ui/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
