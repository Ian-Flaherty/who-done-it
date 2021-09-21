import REACT from 'react';
import Museimp from './Video/Museimp.mp4';
function Winners() {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
      }}
      >
      <source src={Museimp} type='video/mp4' />

    </video>
  )
}

export default Winners