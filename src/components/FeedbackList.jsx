import PropTypes from 'prop-types';
import React from 'react'
import FeedbackItem from './FeedbackItem';
import Card from '../shared/Card';

function FeedbackList({ feedback,deleteFeedback }) {
    if (!feedback || 0 === feedback.length) {
        return <Card>no feedback yet</Card>
    }
    return (
        <>
            <div className="feedback-list">
                {
                    feedback.map((item, id) => {
                        return (
                            <FeedbackItem key={id} item={item} deleteFeedback={deleteFeedback}/>
                        )
                    })
                }
            </div >
        </>
    )
}

FeedbackList.propTypes = {
    // feedback: PropTypes.array.isRequired,
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList;