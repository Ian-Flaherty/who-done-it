import React from "react";
import axios from "axios";
import Classmates from './ClassMates';
import { useEffect, useState } from "react";
import Questions from "./Questions";
import Video from './MusVid';


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};
///////////////////

export default function Start() {
  const [questions, setQuestions] = useState([]);
  const [classmates, setClassmates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get(URL2, config);
      setQuestions(res.data.records);
      const response = await axios.get(URL, config);
      setClassmates(response.data.records);
      
    };
    fetchQuestions();
  }, [loading]);

  
    return (
      <>
        <h1>Who is your favorite classmate?</h1>
        < Video />
        <div>
          <Classmates classmates={classmates} 
            loading={loading}
            setLoading={setLoading}
          />
        
        </div>
        
      </>
    );
  }


