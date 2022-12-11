import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';

function Home({addFeedback,feedback,deleteFeedback}) {
    return (
        <div className="container">
            <FeedbackForm addFeedback={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        </div>
    )
}

export default Home;