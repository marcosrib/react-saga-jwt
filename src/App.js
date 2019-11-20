import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'


import Header from './Header'
import store from './redux'
import Home from './screens/Home'
import Admin from './screens/admin'
import Restrito from './screens/restrito'
import Login from './screens/Login'
import { Container } from 'semantic-ui-react';
function App() {

  return (
    <Provider   store={store}>
    <Router>
      <Container>
      <Route exact path='/' component={Home} />
      <Route  path='/admin' component={Admin} />
      <Route  path='/restrito' component={Restrito} />
      <Route path='/login' component={Login} />
      </Container>
    </Router>  
    </Provider>
  );
}

export default App;
