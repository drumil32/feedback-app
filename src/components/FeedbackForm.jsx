import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import {useState} from 'react'

function FeedbackForm() {
    const [text,setText] = useState('');

    const handleChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <Card>
            <form>
                <div className="input-group">
                    <input type="text" value={text} onChange={handleChange}/>
                    <Button type='submit' isDisabled={true} ></Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm