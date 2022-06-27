import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Technology:React.FC = () => {

     let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [postValue, setValue] = useState<any>({
      title:"",
      description:""
    });

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
        title: postValue.title,
        description: postValue.description,
      };
  
      const createTable = async () => {
        await axios.post("http://localhost:8000/api/admin/technology/post", data);
      };
      createTable();
       alert("Inserted");
      navigate("/superadmin");
      // handleClose();
    };
  
    return (
  <>
        <Button variant="primary btn-sm" onClick={handleShow}>
        Create Technology
      </Button>

      <Modal show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Technology</Modal.Title>
        </Modal.Header>
        <Modal.Body>
   
          <div className="form-group">
              <input
              onChange={handleData}
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                onChange={handleData}
                name="description"
                type="text"
                className="form-control"
                placeholder="Description"
              />
            </div>
            <br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
  </>
    );
};

export default Technology;