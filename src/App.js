import Header from './components/Header';
import FeedbackItem from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import {useState} from 'react';

function App() {
  const [feedback,setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    setFeedback( feedback => feedback.filter(item=>item.id !== id) );
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackItem feedback={feedback} deleteFeedback={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
