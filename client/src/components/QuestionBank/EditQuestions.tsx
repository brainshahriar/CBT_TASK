import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const EditQuestions: React.FC = () => {

  const [technologyData, setTechnologyData] = useState<any>('');
  const getTechnology = async () => {
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
    getTechnology();
  }, []);

  let { id } = useParams();
  let navigate = useNavigate();

  const [postValue, setValue] = useState<any>({
    technology: "",
    question_type: "",
    job_rank: "",
    difficulty: "",
    question_body: "",
    remarks: "",
    answer: "",
  });

  const [optionDiv, setOptionDiv] = useState<any>([
    {
      options: "",
    },
  ]);
  const handleClick = () => {
    setOptionDiv([...optionDiv, { option: "" }]);
  };

  const [optionValue, setOptionValue] = useState<any>([]);
  const handleOptionChange = (e: any, index: any) => {
    const newOptions = [...optionValue];
    newOptions[index] = e.target.value;
    setOptionValue(newOptions);
  };


  const [defaultData, setDefaultData] = useState<any>({});

  const getData = async (questionId:any) => {
    await axios
      .get(`http://localhost:8000/api/question/getall/${questionId}`)
      .then((result) => {
        setDefaultData(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setValue((val:any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {
      question_body: (postValue.question_body ? postValue.question_body : undefined),
      answer: (postValue.answer ? postValue.answer : undefined),
      remarks: (postValue.remarks ? postValue.remarks : undefined),
      question_type: (postValue.question_type ? postValue.requestion_type : undefined),
      job_rank: (postValue.job_rank ? postValue.job_rank : undefined),
      difficulty: (postValue.difficulty ? postValue.difficulty : undefined),
      technology: (postValue.technology ? postValue.technology : undefined),
      options: (optionValue ? optionValue : undefined),
    };
    const createTable = async () => {
      await axios.put(`http://localhost:8000/api/question/update/${id}`,data);
    };
    createTable();
    alert("Updated");
    navigate("/home");
  };
  return (
    <>
      <div className=""> 
        <Navbar />
        <div className="container">
          <form className="mt-4" id="myform" onSubmit={handleSubmit}>
            <div className="row">
            <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Technology</label>
                <select
                  className="form-select"
                  name="technology"
                  onChange={handleData}
                >
                  <option selected>Open this select menu</option>
                  {
                    technologyData && technologyData.map((element:any,id:any)=>{
                      return(
                        <option key={id} value={element._id}>{element.title}</option>
                      )
                    })
                  }  
                </select>
              </div>
              <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Question Type</label>
                <select
                  className="form-select"
                  name="question_type"
                  onChange={handleData}
                >
                  <option selected>Open this select menu</option>
                  <option value="mcq">MCQ</option>
                  <option value="coding">Coding</option>
                  <option value="text">Text</option>
                  <option value="drawing">Drawing</option>
                  <option value="uml">UML</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Job Rank</label>
                <select
                  className="form-select"
                  name="job_rank"
                  onChange={handleData}
                >
                  <option selected>Open this select menu</option>
                  <option value="4a">4A</option>
                  <option value="6a">6A</option>
                  <option value="7c">7C</option>
                </select>
              </div>
              <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Difficulty</label>
                <select
                  className="form-select"
                  name="difficulty"
                  onChange={handleData}
                  required
                >
                  <option selected>Open this select menu</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Remarks</label>
                <input
                  defaultValue={defaultData && defaultData.remarks}
                  type="text"
                  name="remarks"
                  className="form-control"
                  onChange={handleData}
                />
              </div>

              <div className="mb-2 col-lg-6 col-md-6 col-12">
                <label className="form-label">Question Title</label>
                <textarea
                  defaultValue={defaultData && defaultData.question_body}
                  name="question_body"
                  className="form-control"
                  onChange={handleData}
                  cols={30}
                  rows={3}
                ></textarea>
              </div>
              <div className="mb-2 col-lg-6 col-md-6 col-12"></div>
              <div className="mb-2 col-lg-6 col-md-6 col-12">
                <label className="form-label">Answer</label>
                <input
                   defaultValue={defaultData && defaultData.answer}
                  name="answer"
                  className="form-control"
                  onChange={handleData}
                />
              </div>
            </div>
            <div className="col-12 row">
              <div className="d-flex optiondiv col-6">
                {optionDiv.map((item: any, i: any) => (
                  <div key={i} className="mb-2 col-lg-12 col-md-12 col-12">
                    <label className="form-label">Options</label>
                    <input
                      type="text"
                      name="options"
                      className="form-control"
                      onChange={(e) => handleOptionChange(e, i)}
                    />
                  </div>
                ))}
              </div>
              <div className="col-6" style={{ marginTop: "32px" }}>
                <p
                  className="btn btn-primary float-right"
                  onClick={handleClick}
                >
                  Add Options
                </p>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditQuestions;
