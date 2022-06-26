import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import JobPost from "./AllCategories/JobPost";
import JobRank from "./AllCategories/JobRank";
import QuestionType from "./AllCategories/QuestionType";
import Technology from "./AllCategories/Technology";

const Home: React.FC = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="content mt-2">
          <div className="col-12 row mb-2" style={{ display: "flex" }}>
            <div className="col-3 center">
              <Technology />
              <div className="header mt-2">
                <h4>Technology</h4>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SL.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3">
              <JobRank />
              <div className="header mt-2">
                <h4>Job Rank</h4>
              </div>
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col">SL.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3">
              <JobPost />
              <div className="header mt-2">
                <h4>Job Post</h4>
              </div>
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col">SL.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3">
              <QuestionType />
              <div className="header mt-2">
                <h4>Question Type</h4>
              </div>
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col">SL.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
