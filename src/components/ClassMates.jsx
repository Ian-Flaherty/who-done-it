// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;
// const URL2 = `https://api.airtable.com/v0/${airtableBase}/Questions`;
// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// };
export default function Classmates(props) {
  // const [classmates, setClassmates] = useState([]);
  const { classmates, loading} = props;
  
  // useEffect(() => {
  //   const FetchClassmates = async () => {
  //     const res = await axios.get(URL, config);
  //     setClassmates(res.data.records);
  //     console.log(res.data.records);
  //     setLoading(false);
  //   }
    
  //   FetchClassmates();
  // }, []);
  
  if (loading) return
  <div></div>
  
    return (
      <div className='classmates'>
        {classmates.map((name) => (
          
          <p>
            {name.fields?.name}
          </p>
        ))}
      </div>
    )
  }


  