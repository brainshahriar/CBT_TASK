import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const QuestionType:React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
  <>
        <Button variant="primary btn-sm" onClick={handleShow}>
        Create Question Type
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Question Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
              />
            </div>
            <br />
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

export default QuestionType;