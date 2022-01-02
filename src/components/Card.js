import React, { useState,useRef } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import ItemDetails from './ItemDetails'
import './Card.css';

const Card = ({item}) =>{
  const [showItemFull, setShowItemFull] = useState(false);
  const itemDetailsRef = useRef()

  const openItemDetails = () =>{
    itemDetailsRef.current.toggleVisibility()
  }

  return (<>
    <MDBCard onClick={openItemDetails}>
      {item.thumb !== null ?
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={item.thumb}  alt='...' position='top' className='thumb'/>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        :null}
        <MDBCardBody>
          <MDBCardTitle>{item.author}</MDBCardTitle>
          <MDBCardText>
            {item.content.substring(0,90)}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard >
    <ItemDetails ref={itemDetailsRef} item={item}/>
    <br />
    </>
  )
}

export default Card
