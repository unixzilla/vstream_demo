import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import List from './components/List';
import './index.css'

const App = () => {

  const [user,setUser] = useState(null)
  //logged User
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
    /*
  if(user === null && process.env.REACT_APP_DEV){
    setUser('{"token":"localhost"}')
  }
  if(user === null){
    return (
      <Container>
        <p> Please login....</p>
      </Container>
    )
  }

  */
  return (
    <Container>
      <List user={user} />
    </Container>
  )
}
export default App
