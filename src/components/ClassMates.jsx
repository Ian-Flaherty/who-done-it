import axios from "axios";
import { Link } from 'react-router-dom';
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_Key;
const URL = `https://api.airtable.com/v0/${airtableBase}/ClassMates`;


const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Classmates(props) {

  const { classmates, setLoading} = props;
  const handleSubmit = async (e) => {
    const id = e.target.title
    const student = classmates.find((classmate) =>
      classmate.id === id);
        console.log(student)
    const fields = {
      'fields': {
      'overall': student.fields.overall + 1
      }
    }
    await axios.patch(`${URL}/${id}`, fields, config)
    setLoading(previousState => !previousState)
  };
  
  
    return (
      <div className='classmates'>
        {classmates.map((image) => (
        
          // eslint-disable-next-line jsx-a11y/alt-text
          <Link to='/Questiontwo' onClick={handleSubmit} style={{ display: 'inline-block', width: 170, height: 170, borderRadius: 400 / 2, }}><img style={{ width: 170, height: 170, borderRadius: 400 / 2 }}
            src=
              {image.fields?.image}
            title={image.id}
          /></Link>
            
        ))}
      </div>
    )
  }


