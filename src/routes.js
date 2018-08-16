import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import productDetail from './components/ProductDetail';
import ProductDetail from './components/ProductDetail';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/about',
    exact: false,
    component: () => <About />
  },
  {
    path: '/products',
    exact: false,
    component: () => <ProductList />
  },
  {
    path: '/productDetail/:id',
    exact: false,
    component: ({ match }) => <ProductDetail match={match} />
  },
  {
    path: '',
    exact: false,
    component: () => <NotFound />
  }
];