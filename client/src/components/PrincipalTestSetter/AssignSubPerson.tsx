import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AssignSubPerson: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
<Button className="btn btn-sm" onClick={handleShow}>
        Request to Sub-Person
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request for Partial Question Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Required Question"
              />
            </div>
            <br />
            <div className="form-group">
              <select
                className="form-select"
                name="technology"
                // onChange={handleData}
              >
                <option selected>Choose Technology</option>
                <option value="react">React</option>
                <option value="php">Php</option>
                <option value="nodejs">NodeJs</option>
                <option value="java">Java</option>
                <option value="ios">iOS</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <select
                className="form-select"
                name="difficulty"
                // onChange={handleData}
              >
                <option selected>Choose Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <select
                className="form-select"
                name="job_rank"
                // onChange={handleData}
              >
                <option selected>Choose Rank</option>
                <option value="4a">4A</option>
                        <option value="6a">6A</option>
                        <option value="7c">7C</option>
              </select>
            </div>
            <br />
            <div className="form-group">
                      <label className="form-label">Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        className="form-control"
                        // onChange={handleData}
                      />
                    </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AssignSubPerson;
