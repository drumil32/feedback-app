import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedback, feedbackEdit,addUpdatedFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState(null);
    const [rating, setRating] = useState(10);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setRating(feedbackEdit.item.rating);
            setText(feedbackEdit.item.text);
            setBtnDisabled(false);
            setMessage(null);
        }
    }, [feedbackEdit]);

    const changeRating = (rating) => {
        setRating(rating);
    }

    const handleChange = (event) => {
        let tempText = event.target.value;
        setText(event.target.value);
        if ('' === tempText) {
            setMessage(null);
            setBtnDisabled(true);
        } else if (tempText !== '' && tempText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters long');
            setBtnDisabled(true);
        } else {
            setMessage(null); setBtnDisabled(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text);
        if (text && text.trim().length > 10) {
            if( feedbackEdit.edit ){
                addUpdatedFeedback({text,rating,id:feedbackEdit.item.id});
            }else
                addFeedback({ text, rating });
            setText('');
            setRating(10);
            setBtnDisabled(true);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <RatingSelect rating={rating} changeRating={changeRating} />
                <div className="input-group">
                    <input type="text" value={text} onChange={handleChange} />
                    <Button type='submit' isDisabled={btnDisabled}> submit </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;