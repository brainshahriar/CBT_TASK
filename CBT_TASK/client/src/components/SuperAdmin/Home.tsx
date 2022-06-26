import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'
import JobPost from './AllCategories/JobPost';
import JobRank from './AllCategories/JobRank';
import QuestionType from './AllCategories/QuestionType';
import Technology from './AllCategories/Technology';

const Home:React.FC = () => {
    return (
        <>
      <div className="main">
        <Navbar />
        <div className="content">
          <div className="col-12 row">
            <div className="col-6 mt-2 ">
                <Technology/>
                <JobRank/>
                <JobPost/>
                <QuestionType/>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Home;