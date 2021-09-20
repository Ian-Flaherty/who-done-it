import React from "react";
import axios from "axios";
import Musicvideo from "./Video/Musicvideo.mp4";
import { useEffect, useState } from "react";
import Questions from "./Questions";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Start() {
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get(URL2, config);
      setQuestions(res.data.records);
      console.log(res.data.records)
    };
    fetchQuestions();
  }, []);

  if (questions) {
    return (
      <>
        <h1>Select the person who best fits the question.</h1>
        <video
          autoPlay
          loop
          muted
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
        <div>
      
          <Questions questions={questions} />
          </div>
      </>
    );
  }
}
