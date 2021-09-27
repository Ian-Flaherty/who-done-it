import React from "react";
import Musicvideo from "./Video/Musicvideo.mp4";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import Classmates from "./ClassMates";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

const Home = () => {
  const [winner, setWinner] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWinner = async () => {
      const res = await axios.get(URL, config);
      let temp = res.data.records[0];
      const victor = res.data.records.forEach((classmate) => {
        if (classmate.fields.overall > temp.fields.overall) {
          temp = classmate;
        }
      });
      console.log(victor);
      console.log(setLoading);
      
      setWinner(temp);
    };
    fetchWinner();
  }, [loading]);

  return (
    <>
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
      <div className="content">
        <div className="info">
          <br />
          <br />
          <br />

          <p className="rules">
            Welcome to Who Do You Think.The game where you decide who you think
            is the best answer.
            <br /> Below is our overall winner at the moment. click on "Start"
            in the top right corner to begin your voting.
          </p>
        </div>
        <br></br>
        <div className= 'image-and-tag' overall-winner="overall-winner">
          <img
            style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
            className="home-winner-img"
            src={winner.fields?.image}
            alt="me"
            />
        </div>
          
            <h1 className='done'>Winner Overall</h1>
            
      </div>
    </>
  );
};

export default Home;
