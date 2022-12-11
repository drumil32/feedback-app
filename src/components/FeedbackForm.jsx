import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import { useState } from 'react'

function FeedbackForm({addFeedback}) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState(null);
    const [rating, setRating] = useState(10);

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
        if( text && text.trim().length>10 ){
            addFeedback({text,rating});
            setText('');
            setRating(10);
            setBtnDisabled(true);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <RatingSelect rating={rating} changeRating={changeRating}/>
                <div className="input-group">
                    <input type="text" value={text} onChange={handleChange} />
                    <Button type='submit' isDisabled={btnDisabled}> submit </Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;