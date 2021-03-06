import React from "react";
import Museimp from "./Video/Museimp.mp4";
import "./Winners.css"
import { useEffect, useState } from "react";
import axios from "axios";



const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

const Winners = () => {
  const [loading, setLoading] = useState ('')
  const [winner, setWinner] = useState([]);
  const [winnertwo, setWinnertwo] = useState([]);
  const [winnerthree, setWinnerthree] = useState([]);
  const [winnerfour, setWinnerfour] = useState([]);
  const [winnerfive, setWinnerfive] = useState([]);
  const [winnersix, setWinnersix] = useState([]);
  const [winnerseven, setWinnerseven] = useState([]);
  const [winnereight, setWinnereight] = useState([]);
  const [winnernine, setWinnernine] = useState([]);
  const [winnerten, setWinnerten] = useState([]);
  const [winnereleven, setWinnereleven] = useState([]);
  const [winnertwelve, setWinnertwelve] = useState([]);
  
  // console.log(setLoading)
  // console.log(winnertwelve)
  useEffect(() => {
    const fetchWinner = async () => {
      const res = await axios.get(URL, config);
      let temp = res.data.records[0];
      let temp2 = res.data.records[0];
      let temp3 = res.data.records[0];
      let temp4 = res.data.records[0];
      let temp5 = res.data.records[0];
      let temp6 = res.data.records[0];
      let temp7 = res.data.records[0];
      let temp8 = res.data.records[0];
      let temp9 = res.data.records[0];
      let temp10 = res.data.records[0];
      let temp11 = res.data.records[0];
      let temp12 = res.data.records[0];

      const victor = res.data.records.forEach((classmate) => {
        if (classmate.fields.questionone > temp.fields.questionone) {
          temp = classmate;
        }
        if (classmate.fields.questiontwo > temp2.fields.questiontwo) {
          temp2 = classmate;
        }
        if (classmate.fields.questionthree > temp3.fields.questionthree) {
          temp3 = classmate;
        }
        if (classmate.fields?.questionfour > temp4.fields.questionfour) {
          temp4 = classmate;
        }
        if (classmate.fields?.questionfive > temp5.fields.questionfive) {
          temp5 = classmate;
        }
        if (classmate.fields?.questionsix > temp6.fields.questionsix) {
          temp6 = classmate;
        }
        if (classmate.fields?.questionseven > temp7.fields.questionseven) {
          temp7 = classmate;
        }
        if (classmate.fields?.questioneight > temp8.fields.questioneight) {
          temp8 = classmate;
        }
        if (classmate.fields.questionnine > temp9.fields.questionnine) {
          temp9 = classmate;
        }
        if (classmate.fields.questionten > temp10.fields.questionten) {
          temp10 = classmate;
        }
        if (classmate.fields.questioneleven > temp11.fields.questioneleven) {
          temp11 = classmate;
        }
        if (classmate.fields.questiontwelve > temp12.fields.questiontwelve) {
          temp12 = classmate;
        }
        
      });
      setWinner(temp);
      setWinnertwo(temp2);
      setWinnerthree(temp3);
      setWinnerfour(temp4);
      setWinnerfive(temp5);
      setWinnersix(temp6);
      setWinnerseven(temp7);
      setWinnereight(temp8);
      setWinnernine(temp9);
      setWinnerten(temp10);
      setWinnereleven(temp11);
      setWinnertwelve(temp12);
    };
    fetchWinner();
  }, [loading]);
  
  return (
    <>
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
        <source src={Museimp} type="video/mp4" />
      </video>
      <div className='container-winner' >
          <div className='winner-container'>
      <div className= 'block'>
        <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnertwo.fields?.image}
          alt="me"
          />
          <h3 className='winner-tac'>Who do you want to work with outside of GA</h3>
        </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnerthree.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who would you want to grab a beer with?</h3>
      </div>
      <div class='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnerfour.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who has the best projects?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnerfive.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who do you think will change the world?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnersix.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who is most likely to go live on mars?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnerseven.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who is most likely to become famous?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnereight.fields?.image}
          alt="me"
        />
        <h3 className='winner-tac'>Who is best dressed?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnernine.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'> Who do you go to help for?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnerten.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who is the most outgoing?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnereleven.fields?.image}
          alt="me"
        />
        <h3 className= 'winner-tac'>Who is the most interesting classmate?</h3>
      </div>
      <div className='block'>
      <img
          style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
          className="Winner-Overall"
          src={winnertwelve.fields?.image}
          alt="me"
            />
            <div className="winner-tac">

        <h3 className= 'winner-tac-text'>Who is the biggest Soccer fan?</h3>
            </div>
      </div>
        </div>
        </div>
    </>
  );
};

export default Winners;
