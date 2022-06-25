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
                <div className="addtable">
                  <h3 className="">Added Set</h3>
                  <table className="table tableclass">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addedSet &&
                        addedSet.map((element: any, id: any) => {
                          return (
                            <tr key={id}>
                              <td>{id + 1}</td>
                              <td>{element.name}</td>
                              <td>
                                <a
                                  className="btn btn-sm btn-danger"
                                  // onClick={() => removeArray(i)}
                                >
                                  Remove
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <button type="submit" className="btn btn-sm btn-primary m-2">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-6" style={{ marginTop: "12px" }}>
              <h3>All Set</h3>
              <div className="table-responsive">
                <table className="table tableclass">
                  <thead>
                    <tr className="table-dark">
                      <th scope="col">SL.</th>
                      <th scope="col">Title</th>
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

            <div className="col-6" style={{ marginTop: "12px" }}>
              <h3>All Partial Sets</h3>
              <div className="table-responsive">
                <table className="table tableclass">
                  <thead>
                    <tr className="table-dark">
                      <th scope="col">SL.</th>
                      <th scope="col">Title</th>
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
