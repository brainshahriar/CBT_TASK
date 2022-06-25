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

  useEffect(() => {
    getData();
  }, []);

  
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
          <div className="col-12 row">
            <div className="col-6 mt-2 ">
              <Link
                className="navbar-brand btn btn-primary btn-sm"
                to="/principaltestsetter/create"
              >
                Create Set
              </Link>

              <AssignSubPerson />

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
                            <td scope="row">{id + 1}</td>
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

              <form onSubmit={handleSubmit}>
              <div className="addtable">
                    <h3 className="mb-2">Added Set</h3>
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
                                <td scope="row">{id + 1}</td>
                                <td>{element.name}</td>
                                <td className="d-flex justify-content-between">
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
                <button type="submit">Submit</button>
              </form>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
