import Musicvideo from "./Video/Musicvideo.mp4";

function Video() {
  return (


    <video
      autoPlay
      loop
      
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
      }}
    >
      <source src={Musicvideo} type="video/mp4" />
    </video>
  )
}

export default Video;