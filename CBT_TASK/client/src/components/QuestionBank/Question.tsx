import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";

const Question: React.FC = () => {
  const [selectType, setSelectType] = useState<any>("");
  console.log(selectType);

  let navigate = useNavigate();

  const [technologyData, setTechnologyData] = useState<any>("");
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

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setValue((val: any) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {
      technology: postValue.technology,
      question_type: postValue.question_type,
      job_rank: postValue.job_rank,
      difficulty: postValue.difficulty,
      question_body: postValue.question_body,
      remarks: postValue.remarks,
      answer: postValue.answer,
      options: optionValue,
    };

    const createTable = async () => {
      await axios.post("http://localhost:8000/api/question/post", data);
    };
    createTable();
    alert("Inserted");
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
                  {technologyData &&
                    technologyData.map((element: any, id: any) => {
                      return (
                        <option key={id} value={element._id}>
                          {element.title}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-2 col-lg-4 col-md-4 col-12">
                <label className="form-label">Question Type</label>
                <select
                  className="form-select"
                  name="question_type"
                  // onChange={handleData}
                  onChange={(e: any) => setSelectType(e.target.value)}
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
                  type="text"
                  name="remarks"
                  className="form-control"
                  onChange={handleData}
                />
              </div>

              <div className="mb-2 col-lg-6 col-md-6 col-12">
                <label className="form-label">Question Title</label>
                <textarea
                  name="question_body"
                  className="form-control"
                  onChange={handleData}
                  cols={30}
                  rows={3}
                ></textarea>
              </div>

              {selectType && selectType === "coding" ? (
                <div>
                  <label className="form-label">Answer</label>
                  <CKEditor
                    // config={editorConfig}
                    onChange={handleData}
                    style={{
                      width: "40vw",
                      height: "20vw",
                    }}
                  />
                </div>
              ) : (
                <div>
                  <div className="mb-2 col-lg-6 col-md-6 col-12"></div>
                  <div className="mb-2 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Anwser</label>
                    <input
                      name="answer"
                      className="form-control"
                      onChange={handleData}
                    />
                  </div>
                </div>
              )}

              {selectType && selectType === "mcq" ? (
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
              ) : undefined}
            </div>
            <br />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Question;
