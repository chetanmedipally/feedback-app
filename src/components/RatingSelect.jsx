import React, { useState,useEffect,useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../Contexts/FeedbackContext';

function RatingSelect({select}) {
    const {feedbackEdit} = useContext(FeedbackContext)
    const ratingNumbers = [1,2,3,4,5,6,7,8,9,10]
    const [selected, setSelected] = useState(10);
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(()=> {
      setSelected(feedbackEdit.item.rating);
    },[feedbackEdit])
  return (
    <div>
      <ul className='rating'>
        {ratingNumbers.map((number) => {
             return <li key={number}>
                 <input 
                 type="radio" 
                 name="rating" 
                 id={`num ${number}`} 
                 value = {number} 
                 onChange= {handleChange} 
                 checked = {selected === number}/>
                <label htmlFor={`num ${number}`}>{number}</label>
            </li>
        })}
      </ul>
    </div>
  );
}
RatingSelect.propTypes = {
  select : PropTypes.func
}

export default RatingSelect