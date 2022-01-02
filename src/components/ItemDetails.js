import React, { useState,useImperativeHandle } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import ReactPlayer from 'react-player'

const ItemDetails = React.forwardRef ((props,ref) => {
  const [scrollableModal, setScrollableModal] = useState(false);


  /*
  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: props.item.url,
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  */

  const toggleVisibility = () => {
    setScrollableModal(!scrollableModal)
  }
  useImperativeHandle(ref,() => {
    return { toggleVisibility }
  })
  const item = props.item
  const closePop = () => {
    document.querySelectorAll('video').forEach(vid => vid.pause());
    setScrollableModal(!scrollableModal)
  }
  return (
    <>
    <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
      <MDBModalDialog scrollable size='xl'>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{item.content}</MDBModalTitle>
            <MDBBtn
            className='btn-close'
            color='none'
            onClick={closePop}
          ></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <div className="ratio ratio-16x9">
            <ReactPlayer
            playing={true}
            controls={true}
            url={item.url}
          />
          </div>
          <p>{item.content}</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={closePop}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
})
export default ItemDetails
