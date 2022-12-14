import { createContext, useState, useEffect } from 'react';
import feedbackData from '../data/feedbackData'

const FeedbackContest = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        edit: false,
        item: {}
    });

    useEffect(() => {
        setIsLoading(true);
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc');
        const data = await response.json();
        console.log(data);
        setFeedback(data);
        setIsLoading(false);
    }

    const deleteFeedback = async (itm) => {
        if (window.confirm(`Are you sure you want to delete?`)) {
            const response = await fetch(`/feedback/${itm.id}`,{method: 'DELETE'});
            const data = await response.json();
            console.log(data);
            setFeedback(feedback => feedback.filter(item => item.id !== itm.id));
        }
    }

    const addFeedback = async (newFeedback) => {
        if (window.confirm(`Are you sure you want to add?`)) {
            const response = await fetch(`/feedback`,{
                method: 'POST',
                headers : { 'Content-Type': 'application/json'},
                body : JSON.stringify(newFeedback)
            });
            const data = await response.json();
            setFeedback(prevFeedback => [data,...prevFeedback]);
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({ edit: true, item });
    }

    const addUpdatedFeedback = async (item) => {
        if (window.confirm(`Are you sure you want to update?`)) {
            const response = await fetch(`/feedback/${item.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body : JSON.stringify(item)
            });
            const data = await response.json();
            setFeedback(prevFeedback => prevFeedback.map(feedback => {
                if (item.id === feedback.id) {
                    return data;
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