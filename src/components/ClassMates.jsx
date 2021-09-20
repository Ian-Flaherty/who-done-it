import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;
const config = {
headers: {
  Authorization: `Bearer ${airtableKey}`,
},
};


export default function Classmates(props) {
  const [classmates, setClassmates] = useState([]);


  useEffect(() => {
    const getClassmates = async () => {
      const res = await axios.get(URL, config);
      setQuestions(res);
      console.log(res);
    };
    getQuestions();
  }, []);