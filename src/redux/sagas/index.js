import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
function* login(action) {
    let token = localStorage.getItem('token')
    //if (!token) {
      const login = yield axios.post('http://localhost:3001/users/login', {
        "email": action.email,
        "passwd": action.passwd
      })
      if( login.data.token){
        const token = login.data.token;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        localStorage.setItem('user', decoded);
      }
  

}
export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login)
    ])
}