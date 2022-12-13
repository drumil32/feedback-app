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
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);






  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
