import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './containers/Products/Products'
import ViewProduct from './containers/ViewProduct/ViewProduct'
import Search from './containers/Search/Search'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error404/Error404'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact/>
          <Route path="/products/:id" component={ViewProduct} />
          <Route path="/search" component={Search} exact/>
          <Route path="*" component={Error404} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
