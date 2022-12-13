import React,{useContext} from 'react';
import FeedbackContest from '../context/FeedbackContext';
// import PropTypes from 'prop-types';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContest);
    let rating = feedback.reduce( (acc,curr) => {
        return acc+curr.rating;
    } ,0)/feedback.length;

    rating = rating.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4> Reviews : {feedback.length} </h4>
            <h4>Average Rating : {isNaN(rating)?0:rating}</h4>
        </div>
    )
}

// FeedbackStats.prototype = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats