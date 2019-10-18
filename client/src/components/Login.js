import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const userCredentials = {
    username: '',
    password: '',
  }

  const [ user, setUser ] = useState(userCredentials)

  const handleChanges = e => {
    console.log(user)
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', user)
    .then(response => {
      console.log('PAYLOAD: ', response.data.payload)
      localStorage.setItem('token', response.data.payload)
      props.history.push('/protected')
    })
    .catch(error => console.log('ERROR: ', error))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login here</p>
      <form onSubmit={handleLogin}>
        <input name='username' type='text' placeholder='Username' value={user.username} onChange={handleChanges}></input>
        <input name='password' type='password' placeholder='Password' value={user.password} onChange={handleChanges}></input>
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
