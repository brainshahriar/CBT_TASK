import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Home: React.FC = () => {
  const [userData, setuserData] = useState<any[]>([]);

  const [selectedData, setSelectedData] = useState<any>("all");

  const getData = async () => {
    await axios
      .get(
        `http://localhost:8000/api/question/getall?technology=${selectedData}`
      )
      .then((result) => {
        setuserData(result.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, [selectedData]);

  const deleteRecord = async (id: any) => {
    await axios
      .delete(`http://localhost:8000/api/question/delete/${id}`)
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
      <div className="">
        <Navbar />
        <div className="add_btn mt-2 mb-2">
          <Link to="/question" className="btn btn-primary btn-sm">
            Add Questions to Bank
          </Link>
        </div>
        <div className="col-12 ">
          <div className="col-6 mt-2 m-auto">
            <div className="select mb-2">
              <div>
                <h3>All Questions</h3>
              </div>
              <div>
                <select
                  className="form-select"
                  onChange={(e: any) => setSelectedData(e.target.value)}
                >
                  <option selected value="all">
                    All
                  </option>
                  <option value="react">React</option>
                  <option value="php">Php</option>
                  <option value="nodejs">NodeJs</option>
                  <option value="java">Java</option>
                  <option value="ios">iOS</option>
                </select>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table tableclass">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">SL.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Tech.</th>
                    <th scope="col">Difficulty</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    userData.map((element, id) => {
                      return (
                        <tr key={id}>
                          <td scope="row">{id + 1}</td>
                          <td>{element.question_body}</td>
                          <td>{element.technology}</td>
                          <td>{element.difficulty}</td>
                          <td>{element.job_rank}</td>
                          <td>
                            <Link to={`/question/edit/${element._id}`}>
                              <button className="btn btn-primary btn-sm">
                                Edit
                              </button>
                            </Link>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
