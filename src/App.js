import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Error404 from './components/Error404/Error404'
import Products from './containers/Products/Products'
import ViewProduct from './containers/ViewProduct/ViewProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact/>
          <Route path="/products/:id" component={ViewProduct} />
          <Route path="*" component={Error404} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
