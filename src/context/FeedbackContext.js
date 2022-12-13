import { createContext, useState } from 'react';
import feedbackData from '../data/feedbackData'

const FeedbackContest = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete?`)) {
            setFeedback(feedback => feedback.filter(item => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        if (window.confirm(`Are you sure you want to add?`)) {
            newFeedback.id = feedback.length + 1;
            setFeedback(prevFeedback => [...prevFeedback, newFeedback]);
        }
    }

    return (
        <FeedbackContest.Provider
            value={{ feedback, deleteFeedback, addFeedback }}
        >{children}
        </FeedbackContest.Provider>
    )
};

export default FeedbackContest;