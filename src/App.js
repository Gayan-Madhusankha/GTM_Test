import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import AboutPage from './components/about-page';
import HomePage from './components/home-page';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'pageview',
        page: location.pathname,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TrackPageView />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
