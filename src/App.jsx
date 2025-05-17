import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './landingpage/home/Home';
import SignUpComponent from './components/SignUpComponent';
import Login from "./landingpage/login/Login";
import ComparePage from './landingpage/comparecolleges/ComparePage';
import ReviewCollege from './landingpage/reviewcollege/ReviewCollege';
import ExploreCollege from './landingpage/explorecollege/ExploreCollege';
import ShortlistedColleges from './landingpage/shortlistcolleges/ShortlistCollege';
import Counselling from './counselling/Counselling';
import QnA from './landingpage/qnA/QnA';


const App = () => {
  console.log("✅ App component rendered");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/compare" element={<ComparePage />} />
         <Route path="/review" element={<ReviewCollege />} />
          <Route path="/explore" element={<ExploreCollege />} />
           <Route path="/shortlist" element={<ShortlistedColleges />} />
            <Route path="/counselling" element={<Counselling />} />
             <Route path="/question" element={<QnA/>} />

      </Routes>
    </Router>
  );
};
export default App;
