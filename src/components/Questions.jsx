// import { useEffect, useState } from "react";
// import axios from "axios";
import React from 'react'
// import { link } from "react-router-dom";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Questions(props) {
  
  
  
  return (
      
      <div className="questions">
        {props.questions.map((question) => ( 

          
          <p>
            {question.fields.question}
            </p>
        
        ))} 
        
      </div>
    );
}
