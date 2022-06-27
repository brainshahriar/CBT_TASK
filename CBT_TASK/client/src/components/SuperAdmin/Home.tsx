import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import JobPost from "./AllCategories/JobPost";
import JobRank from "./AllCategories/JobRank";
import QuestionType from "./AllCategories/QuestionType";
import Technology from "./AllCategories/Technology";
import axios from "axios";

const Home: React.FC = () => {
  const [technologyData, setTechnologyData] = useState<any[]>([]);
  const getData = async () => {
    await axios
      .get("http://localhost:8000/api/admin/technology/getall")
      .then((result) => {
        setTechnologyData(result.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteRecord = async (id: any) => {
    await axios
      .delete(`http://localhost:8000/api/admin/technology/delete/${id}`)
      .then((result) => {
        alert("Deleted");
      })
      .catch((error) => {
        alert(error.message);
      });
    getData();
  };
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
                  {technologyData &&
                    technologyData.map((element: any, i: any) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i+1}</th>
                          <td>{element.title}</td>
                          <td>{element.description}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                const confirmBox = window.confirm(
                                  "Do you really want to delete "
                                );
                                if (confirmBox === true) {
                                  deleteRecord(element._id);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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
                    <td>ddd</td>
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
