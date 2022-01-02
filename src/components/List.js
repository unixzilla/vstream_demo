import React, { useState, useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Card from './Card';
import DataService from '../services/Data'

const List = ({ user }) => {

  //grep server data to presents items
  const [data, setData] = useState(null)
  useEffect(() => {
    //DataService.setToken(user.token)
    DataService.getAll().then(resp => {
      setData(resp)
    }
    )
  }, [])

  //check whether evidenceData is ready
  if(data === null){
    return (
      <Row>
        <p> Loading....</p>
      </Row>
    )
  }

  const listE = data.map((e) =>{
    return (
      <Col key={Math.random().toString(36).substr(2, 9)} xs={12} md={12} lg={3}>
        <Card item={e} />
      </Col>
    )
  })


  return (
    <Row>
      {listE}
    </Row>
  );
}

export default List
