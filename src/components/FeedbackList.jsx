import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
    if (!feedback || 0 === feedback.length) {
        return <p>no feedback yet</p>
    }
    return (
        <>
            <div className="feedback-list">
                {
                    feedback.map((item,id) => {
                        return (
                            <FeedbackItem item={item}/>
                        )
                    })
                }
            </div >
        </>
    )
}

export default FeedbackList;