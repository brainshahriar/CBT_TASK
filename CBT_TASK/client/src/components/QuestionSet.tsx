import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
const QuestionSet: React.FC = () => {
  //get All Question

  const [bankData, setbankData] = useState<any[]>([]);

  const [selectedData, setSelectedData] = useState<any>("all");

  const getData = async () => {
    await axios
      .get(
        `http://localhost:8000/api/question/getall?technology=${selectedData}`
      )
      .then((result) => {
        setbankData(result.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, [selectedData]);

  //get All questions

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const [postValue, setValue] = useState<any>({
    name: "",
    deadline: "",
    technology: "",
    job_rank: "",
    difficulty: "",
  });

  const [questionValue, setQuestionValue] = useState<any>({
    technology: "",
    question_type: "",
    job_rank: "",
    difficulty: "",
    isFromQuestionBank: "",
    question_body: "",
    remarks: "",
    answer: "",
    option: [],
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

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const [questionArray, setQuestionArray] = useState<any>([]);

  const handleQuestionData = (e: any) => {
    const { name, value } = e.target;
    setQuestionValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleQuestionPush = () => {
    // const isNonEmpty = !Object.values(questionValue).some(
    //     (x) => x === null || x === ""
    //   );
    const newQuestion = { ...questionValue };
    newQuestion.options = optionValue;
    setQuestionArray([...questionArray, newQuestion]);
    setQuestionValue({
      technology: "",
      question_type: "",
      job_rank: "",
      difficulty: "",
      isFromQuestionBank: "",
      question_body: "",
      remarks: "",
      answer: "",
      option: [],
    });
    handleClose();
  };
  console.log(questionArray);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {
      name: postValue.name,
      deadline: postValue.deadline,
      technology: postValue.technology,
      job_rank: postValue.job_rank,
      difficulty: postValue.difficulty,
      questions: questionArray,
    };

    const createTable = async () => {
      await axios.post("http://localhost:8000/api/set/post", data);
    };
    createTable();
    alert("Inserted");
    navigate("/home");
  };

  const handleQuestionBank = (question: any) => {
    const { _id, ...rest } = question;
    const newObject = { ...rest, bank_id: _id, isFromQuestionBank: _id };
    const newQuesArr = [...questionArray, newObject];
    setQuestionArray(newQuesArr);
  };

  const removeArray = (i: any) => {
    const newQuesArr = [...questionArray];
    newQuesArr.splice(i, 1);
    //   console.log(newQuesArr);
    setQuestionArray(newQuesArr);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <NavLink to="/">home</NavLink>
        <form className="mt-4  col-md-6" id="myform" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Set Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Deadline</label>
              <input
                type="date"
                name="deadline"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Technology</label>
              <select
                className="form-select"
                name="technology"
                onChange={handleData}
              >
                <option selected>Open this select menu</option>
                <option value="react">React</option>
                <option value="php">Php</option>
                <option value="nodejs">NodeJs</option>
                <option value="java">Java</option>
                <option value="ios">iOS</option>
              </select>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
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

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                name="difficulty"
                onChange={handleData}
              >
                <option selected>Open this select menu</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <Button className="btn btn-primary" onClick={handleShow}>
              Add Questions
            </Button>

            <br />
            <br />
            <div>
              <div className="mt-5"></div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Questions</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Technology</label>
                    <select
                      className="form-select"
                      name="technology"
                      onChange={handleQuestionData}
                    >
                      <option selected>Open this select menu</option>
                      <option value="react">React</option>
                      <option value="php">Php</option>
                      <option value="nodejs">NodeJs</option>
                      <option value="java">Java</option>
                      <option value="ios">iOS</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Question Type</label>
                    <select
                      className="form-select"
                      name="question_type"
                      onChange={handleQuestionData}
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
                  <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Job Rank</label>
                    <select
                      className="form-select"
                      name="job_rank"
                      onChange={handleQuestionData}
                    >
                      <option selected>Open this select menu</option>
                      <option value="4a">4A</option>
                      <option value="6a">6A</option>
                      <option value="7c">7C</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Difficulty</label>
                    <select
                      className="form-select"
                      name="difficulty"
                      onChange={handleQuestionData}
                      required
                    >
                      <option selected>Open this select menu</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Remarks</label>
                    <input
                      type="text"
                      name="remarks"
                      className="form-control"
                      onChange={handleQuestionData}
                    />
                  </div>

                  <div className="mb-3 col-lg-12 col-md-12 col-12">
                    <label className="form-label">Question Title</label>
                    <textarea
                      name="question_body"
                      className="form-control"
                      onChange={handleQuestionData}
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12 col-12">
                    <label className="form-label">Answer</label>
                    <textarea
                      name="answer"
                      className="form-control"
                      onChange={handleQuestionData}
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>
                  {optionDiv.map((item: any, i: any) => (
                    <div key={i} className="mb-3 col-lg-6 col-md-6 col-12">
                      <label className="form-label">Options</label>
                      <input
                        type="text"
                        name="options"
                        className="form-control"
                        onChange={(e) => handleOptionChange(e, i)}
                      />
                    </div>
                  ))}
                  <p className="btn btn-primary" onClick={handleClick}>
                    Add Options
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleQuestionPush}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <br />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <br />
        <div className="container">
          <h3>Added Questions</h3>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">From Question Bank</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {questionArray &&
                questionArray.map((element: any, id: any, i: any) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{element.question_body}</td>
                      <td>{element.isFromQuestionBank ? "Yes" : "No"}</td>
                      <td className="d-flex justify-content-between">
                        <button
                          className="btn btn-danger"
                          onClick={() => removeArray(i)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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

          <div className="mt-5">
            <div className="container">
              <table className="table">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bankData &&
                    bankData.map((element, id) => {
                      return (
                        <tr key={id}>
                          <th scope="row">{id + 1}</th>
                          <td>{element.question_body}</td>
                          <td className="d-flex justify-content-between">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleQuestionBank(element)}
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
    </>
  );
};

export default QuestionSet;
