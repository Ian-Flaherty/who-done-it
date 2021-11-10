import React from "react";
import axios from "axios";
import './Questions.css';
import { useEffect, useState } from "react";
import Video from './MusVid';
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;



const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};
///////////////////

export default function QuestionTwo() {
  
  const [classmates, setClassmates] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    const id = e.target.title
    const student = classmates.find((classmate) => classmate.id === id);
    console.log(student)
    const fields = {
      fields: {
      questiontwo: student.fields.questiontwo + 1
      },
    }
    await axios.patch(`${URL}/${id}`, fields, config)
    setLoading(previousState => !previousState)
  };
  useEffect(() => {
    const fetchClassmates = async () => {
      
      const response = await axios.get(URL, config);
      setClassmates(response.data.records);
      
    };
    fetchClassmates();
  }, [loading]);

  
    return (
      <>
        <h1>Who do you want to work with outside of GA?</h1>
        < Video />
        <div>
      
      
        <div className='classmates'>
        {classmates.map((image) => (
        
          // eslint-disable-next-line jsx-a11y/alt-text
          <Link  to='./Questionthree' onClick={handleSubmit} style={{ display: 'inline-block', width: 170, height: 170, borderRadius: 400 / 2, }}><img className="student-image" style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
            src=
              {image.fields?.image}
            title={image.id}
            /></Link>
            
        ))}
      </div>
          </div>
          
      </>
    )
  }
  