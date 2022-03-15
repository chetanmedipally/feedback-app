import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './Contexts/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element = {<AboutIconLink />} />
      </Routes>
    </Router>
    </FeedbackProvider>
  );
}

export default App