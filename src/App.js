import Header from './components/Header';
import FeedbackItem from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import ReactDOM from "react-dom/client";
import Home from './page/Home';
import About from './page/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        {/* <Header /> */}
        <Route index element={<Home addFeedback={addFeedback} deleteFeedback={deleteFeedback} feedback={feedback}/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
