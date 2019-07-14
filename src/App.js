import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Header from './Header'
import store from './redux'
import { Provider } from 'react-redux'
function App() {
  /* useEffect(async () => {
 
     let token = localStorage.getItem('token')
     if (!token) {
       const login = await axios.post('http://localhost:3001/users/login', {
         "email": "marcos@gmail.com",
         "passwd": "123456"
       })
       const token = login.data.token;
       localStorage.setItem('token', token);
     }
     const decoded = jwtDecode(token)
     console.log(decoded);
   }, []) */
  return (
    <Provider   store={store}>
      <div className="App">
        <Header/>
      </div>
    </Provider>
  );
}

export default App;
