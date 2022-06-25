import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

const Home:React.FC = () => {
    return (
        <>
      <div className="main">
        <Navbar />
        <div className="content">
          <div className="col-12 row">
            <div className="col-6 mt-2 ">
                TEst
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Home;