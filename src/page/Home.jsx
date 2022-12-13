import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';

function Home() {
    return (
        <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
    )
}

export default Home;