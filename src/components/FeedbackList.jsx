// import PropTypes from 'prop-types';
import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem';
import Card from '../shared/Card';
import Spinner from '../shared/Spinner'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    if (!feedback || 0 === feedback.length) {
        return <Card>no feedback yet</Card>
    }
    return (
        <>
            {isLoading ? <Spinner/> :
                <div className="feedback-list">
                    {
                        feedback.map((item, id) => {
                            return (
                                <FeedbackItem key={id} item={item} />
                            )
                        })
                    }
                </div >
            }
        </>
    )
}

// FeedbackList.propTypes = {
//     // feedback: PropTypes.array.isRequired,
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList;