import React, { useState,useContext, useEffect } from 'react'

import Button from './shared/Button';
import Card from "./shared/Card"
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Contexts/FeedbackContext';


function FeedbackForm() {
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);

    useEffect(() => {
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
    },[feedbackEdit])

    const handleChange = (e) => {
        if (text === '') {
            setMessage("");
            setBtnDisabled(true);
        }
        else if(text !== '' && text.length < 10) {
            setMessage("Text must be atleast 10 characters")
            setBtnDisabled(true);
        }
        else {
            setMessage("");
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        if(text.trim().length > 10) {
            const newFeedback = {
                'text' :text,
                'rating' : rating,

            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else {
                addFeedback(newFeedback)
            }
            setText("");
            setRating(10);
        }
        e.preventDefault();
    }
  return (
    <Card >
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleChange} type="text" value={text || ''} />
                <Button type = 'submit' isDisabled = {btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm