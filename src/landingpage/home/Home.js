import React from 'react';

import HeroSection from './HeroSection';
import Compare from './Compare';
import Explore from './Explore';
import Counselling from './Counselling';
import ReviewCollege from './ReviewCollege';
import Shortlist from './Shortlist';
import ShareExperience from './ShareExperience';
import QuestionAnswer from './QuestionAnswer';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
function Home () {
     
    return ( 
        <>
        
        <HeroSection />
         <Compare />
         <Explore />
         <Counselling />
         <ReviewCollege />
         <Shortlist />
         <ShareExperience />
         <QuestionAnswer />
         <Footer />

        </>
     );
}

export default Home;