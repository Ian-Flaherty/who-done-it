import React from "react";
import Museimp from "./Video/Museimp.mp4";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Winner2 from './Questiontwowinner';
// import Classmates from "./ClassMates";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

const Winners = () => {
  const [winner, setWinner] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchWinner = async () => {
      const res = await axios.get(URL, config);
      let temp = res.data.records[0];
      
      const victor = res.data.records.forEach((classmate) => {
        if (classmate.fields.questionone > temp.fields.questionone) {
          temp = classmate;
        }
      });
      console.log("this is the winner", temp);
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
        <source src={Museimp} type="video/mp4" />
      </video>
      <div overallWinner="overallWinner">
        <img
          style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
          classname="Winner-Overall"
          src={winner.fields?.image}
          alt="me"
        />
        <h3>Who do you want to work with outside of GA</h3>
      </div>
      {/* <div>
        <Winner2/>
      </div> */}
    </>
  );
};

export default Winners;
