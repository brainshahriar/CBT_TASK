import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const JobRank:React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
  <>
        <Button variant="primary btn-sm" onClick={handleShow}>
        Create Job Rank
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Rank</Modal.Title>
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

export default JobRank;