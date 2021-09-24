// import React from "react";
// import Museimp from "./Video/Museimp.mp4";
// import "./Home.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import Classmates from "./ClassMates";

// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
// const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;

// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// };

// const Winner2 = () => {
//   const [winner, setWinner] = useState([]);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     const fetchWinner = async () => {
//       const res = await axios.get(URL, config);
//       let temp = res.data.records[0];
      
//       const victor = res.data.records.forEach((classmate) => {
//         if (classmate.fields.questiontwo > temp.fields.questiontwo) {
//           temp = classmate;
//         }
//       });
//       console.log("this is the winner", temp);
//       setWinner(temp);
//     };
//     fetchWinner();
//   }, [loading]);
//   return (
    

      
    
//     <div winner2="winner2">
//       <img
//         style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
//         classname="Winner-Overall"
//         src={winner.fields?.image}
//         alt="me"
//       />
//       <h3>Who do you want to work with outside of GA</h3>
//     </div>
  
// );
// };


// export default Winner2;