import { createContext, useState } from 'react';
import feedbackData from '../data/feedbackData'

const FeedbackContest = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        edit: false,
        item: {}
    })

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

    const editFeedback = (item) => {
        setFeedbackEdit({ edit: true, item });
    }

    const addUpdatedFeedback = (item) => {
        if (window.confirm(`Are you sure you want to update?`)) {
            setFeedback(prevFeedback => prevFeedback.map(feedback => {
                if (item.id === feedback.id) {
                    return item;
                } else
                    return feedback;
            }));
        }
        setFeedbackEdit({ edit: false, item: {} });
    }

    return (
        <FeedbackContest.Provider
            value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, addUpdatedFeedback }}
        >{children}
        </FeedbackContest.Provider>
    )
};

export default FeedbackContest;