import Header from './components/Header';
import FeedbackItem from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import {useState} from 'react';

function App() {
  const [feedback,setFeedbacks] = useState(feedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
