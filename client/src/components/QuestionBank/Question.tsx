import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";
import { Formik } from "formik";

const initialValues = {
  technology: "",
  question_type: "",
  job_rank: "",
  difficulty: "",
  question_body: "",
  remarks: "",
  answer: "",
};

const validate: any = (values: any) => {
  let errors: any = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.question_body) {
    errors.question_body = "Title is required";
  }
  if (!values.answer) {
    errors.answer = "Answer is required";
  }
  if (!values.question_type) {
    errors.question_type = "Question Type is required";
  }
  if (!values.difficulty) {
    errors.difficulty = "Difficulty is required";
  }
  if (!values.job_rank) {
    errors.job_rank = "Job Rank is required";
  }
  if (!values.technology) {
    errors.technology = "Technology is required";
  }

  return errors;
};

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

  const handleSubmits = (values: any) => {
    // e.preventDefault();
    const data: any = {
      technology: values.technology,
      question_type: values.question_type,
      job_rank: values.job_rank,
      difficulty: values.difficulty,
      question_body: values.question_body,
      remarks: values.remarks,
      answer: values.answer,
      options: optionValue,
    };
    console.log(data);

    const createTable = async () => {
      await axios.post("http://localhost:8000/api/question/post", data);
    };
    createTable();
    alert("Inserted");
    navigate("/home");
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmits}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
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
                      onChange={handleChange}
                      value={values.technology}
                      onBlur={handleBlur}
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
                    {errors.technology && touched.technology && (
                      <span className="text-danger">{errors.technology}</span>
                    )}
                  </div>
                  <div className="mb-2 col-lg-4 col-md-4 col-12">
                    <label className="form-label">Question Type</label>
                    <select
                      className="form-select"
                      name="question_type"
                      value={values.question_type}
                      onChange={(e: any) => {
                        setSelectType(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    >
                      <option selected>Open this select menu</option>
                      <option value="mcq">MCQ</option>
                      <option value="coding">Coding</option>
                      <option value="text">Text</option>
                      <option value="drawing">Drawing</option>
                      <option value="uml">UML</option>
                      <option value="video">Video</option>
                    </select>
                    {errors.question_type && touched.question_type && (
                      <span className="text-danger">
                        {errors.question_type}
                      </span>
                    )}
                  </div>
                  <div className="mb-2 col-lg-4 col-md-4 col-12">
                    <label className="form-label">Job Rank</label>
                    <select
                      className="form-select"
                      name="job_rank"
                      onChange={handleChange}
                      value={values.job_rank}
                      onBlur={handleBlur}
                    >
                      <option selected>Open this select menu</option>
                      <option value="4a">4A</option>
                      <option value="6a">6A</option>
                      <option value="7c">7C</option>
                    </select>
                    {errors.job_rank && touched.job_rank && (
                      <span className="text-danger">{errors.job_rank}</span>
                    )}
                  </div>
                  <div className="mb-2 col-lg-4 col-md-4 col-12">
                    <label className="form-label">Difficulty</label>
                    <select
                      className="form-select"
                      name="difficulty"
                      onChange={handleChange}
                      value={values.difficulty}
                      onBlur={handleBlur}
                    >
                      <option selected>Open this select menu</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    {errors.difficulty && touched.difficulty && (
                      <span className="text-danger">{errors.difficulty}</span>
                    )}
                  </div>

                  <div className="mb-2 col-lg-4 col-md-4 col-12">
                    <label className="form-label">Remarks</label>
                    <input
                      type="text"
                      name="remarks"
                      className="form-control"
                      onChange={handleChange}
                      value={values.remarks}
                      placeholder="Not required"
                    />
                  </div>

                  <div className="mb-2 col-lg-6 col-md-6 col-12">
                    <label className="form-label">Question Title</label>
                    <textarea
                      name="question_body"
                      className="form-control"
                      onChange={handleChange}
                      cols={30}
                      rows={3}
                      value={values.question_body}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.question_body && touched.question_body && (
                      <span className="text-danger">
                        {errors.question_body}
                      </span>
                    )}
                  </div>

                  {selectType && selectType === "coding" ? (
                    <div>
                      <label className="form-label">Answer</label>
                      <CKEditor
                        // config={editorConfig}
                        name="answer"
                        onChange={handleChange}
                        value={values.answer}
                        // onBlur={handleBlur}
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
                          onChange={handleChange}
                          value={values.answer}
                          onBlur={handleBlur}
                        />
                        {errors.answer && touched.answer && (
                          <span className="text-danger">{errors.answer}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {selectType && selectType === "mcq" ? (
                    <div className="col-12 row">
                      <div className="d-flex optiondiv col-6">
                        {optionDiv.map((item: any, i: any) => (
                          <div
                            key={i}
                            className="mb-2 col-lg-12 col-md-12 col-12"
                          >
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
        );
      }}
    </Formik>
  );
};

export default Question;
