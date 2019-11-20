import { put } from 'redux-saga/effects'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import actionCreators from '../actionCreators'

export function* login(action) {

  const login = yield axios.post('http://localhost:3001/users/login', {
    "email": action.email,
    "passwd": action.passwd
  })
  console.log('ffffff');

  if (login.data.token) {
    const token = login.data.token;
    localStorage.setItem('token', token);
    const user = jwtDecode(token);
    localStorage.setItem('user', user);
    yield put(actionCreators.signinSuccess(user))
  } else {
    yield put(actionCreators.signinFailure(login.data.message))
  }
}
export function* auth() {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      const user = jwtDecode(token);
      yield put(actionCreators.authSuccess(user))
    } catch (error) {
      yield put(actionCreators.authFailure('ivalid token'))
    }
  } else {
    yield put(actionCreators.authFailure('no token'))
  }
}

export function* destroyAuth() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  yield put(actionCreators.destroyAuthSuccess())

}