import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";


const Home: React.FC = () => {

  const [userData, setuserData] = useState<any[]>([]);

  const getData = async() => {
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

  // const deleteRecord = async(id: any) => {
  //   await axios
  //     .delete(`http://localhost:8000/api/user/delete/${id}`)
  //     .then((result) => {
  //       alert("Deleted");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  //   getData();
  // };

  return (
    <>
          <div className="mt-5">
        <div className="container">
          <Navbar />
          <div className="add_btn mt-2 mb-2">
            <Link to="/question" className="btn btn-primary">
              Add Questions
            </Link>
          </div>
          <div className="add_btn mt-2 mb-2">
            <Link to="/questionset" className="btn btn-primary">
              Create Question Set
            </Link>
          </div>
          <div className=" d-flex flex-row flex-wrap ">
          {
      userData && userData.map((element,id)=>{
        return(
          <div className="card m-2" style={{ width: "15rem" }}>
          <div className="card-body">
            <h5 className="card-title">Set Name : {element.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      
        )
      })
    }
  </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
