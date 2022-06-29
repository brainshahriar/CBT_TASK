import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import AssignSubPerson from "./AssignSubPerson";
import axios from "axios";

const Home: React.FC = () => {
  const [setValue, setSetValue] = useState<any>("");
  const [addedSet, setAddedSet] = useState<any>("");

  const [userData, setuserData] = useState<any[]>([]);
  const getData = async () => { 
    await axios
      .get("http://localhost:8000/api/set/getall")
      .then((result) => {
        setuserData(result.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [partialuserData, setpartialUserData] = useState<any[]>([]);
  const getpartialData = async () => {
    await axios
      .get("http://localhost:8000/api/set/partial/getall")
      .then((result) => {
        setpartialUserData(result.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getpartialData();
  }, []);

  const handleSet = (set: any) => {
    const { _id, ...rest } = set;
    const newObject = {
      ...rest,
    };
    const newSet = newObject;
    const setMap = [newObject];
    setSetValue(newSet);
    setAddedSet(setMap);
  };
  console.log(setValue);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const createTable = async () => {
      await axios.post("http://localhost:8000/api/set/post", setValue);
    };
    createTable();
    alert("Inserted");
    
    getData();
  };
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="content">
          <Link
            className="btn btn-primary btn-sm m-2"
            to="/principaltestsetter/create"
          >
            Create Set
          </Link>
          <AssignSubPerson />
          <div className="col-12 row">
            <div className="col-6 mt-2">
              <form onSubmit={handleSubmit}>
                {addedSet &&
                  addedSet.map((element: any, id: any) => {
                    return (
                      <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                          <div key={id}>
                            <h5 className="card-title">
                              Name : {element.name}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Technology : {element.technology}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Job Rank : {element.job_rank}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Difficulty : {element.difficulty}
                            </h6>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Number of Questions : {element.numOfQuestion}
                            </h6>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary m-2"
                        >
                          Submit
                        </button>
                      </div>
                    );
                  })}
              </form>

              <div className="col-12">
                <h3>All Partial Sets</h3>
                <div className="table-responsive">
                  <table className="table tableclass">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">SL.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Technology</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Total Question</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partialuserData &&
                        partialuserData.map((element, id) => {
                          return (
                            <tr key={id}>
                              <td>{id + 1}</td>
                              <td>{element.name}</td>
                              <td>{element.technology}</td>
                              <td>{element.difficulty}</td>
                              <td>{element.numOfQuestion}</td>
                              <td>
                                <button
                                  className="btn-success btn btn-sm"
                                  onClick={() => handleSet(element)}
                                >
                                  Add
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

            <div className="col-6">
              <h3>All Sets</h3>
              <div className="table-responsive">
                <table className="table tableclass">
                  <thead>
                    <tr className="table-dark">
                      <th scope="col">SL.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Technology</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Total Question</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData &&
                      userData.map((element, id) => {
                        return (
                          <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{element.name}</td>
                            <td>{element.status ? "Active" : "Inactive"}</td>
                            <td>{element.technology}</td>
                            <td>{element.difficulty}</td>
                            <td>{element.numOfQuestion}</td>
                            <td>
                              <button
                                className="btn-success btn btn-sm"
                                onClick={() => handleSet(element)}
                              >
                                Add
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
      </div>
    </>
  );
};

export default Home;
