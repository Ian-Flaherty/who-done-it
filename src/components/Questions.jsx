
import React from 'react'


export default function Questions(props) {
  
  
  
  return (
      
      <div className="questions">
        {props.questions.map((question) => ( 

          
          <p>
            {question.fields?.question}
            </p>
        
        ))} 
        
      </div>
    );
}
