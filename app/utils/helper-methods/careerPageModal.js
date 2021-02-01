import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Axios from "../../service/axios-config";

const ModalExample = (props) => {
  const { buttonLabel, className, jobDescription } = props;
  const initialFields = {
    emailAddress: "",
    jobDescription: jobDescription,
  };

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState(initialFields);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFocusInput = (name) => {
    console.log(props)
    if (name == "emailAddress") {
      setEmailError(false);
    }
  };

  const _validation = () => {
    if (!formData.emailAddress.match(/\S+@\S+\.\S+/)) {
      setEmailError(true);
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (e) => {
    if (_validation()) {
      e.preventDefault();
      try {
        let res = await Axios.post("careerJob-Mail", {
          email: formData.emailAddress,
          jobDescription: formData.jobDescription,
        });
        if (res.status == 200) {
          alert("Successful!");
          setFormData(initialFields);
          setModal(!modal);
        } else {
          alert("Something went wrong!");
          setModal(!modal);
        }
      } catch (error) {
        console.log("error---->", error);
      }
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Apply for the Job Posts</ModalHeader>
        <ModalBody>
          <FormGroup className="px-4">
            <Label for="email">Email*</Label>
            <Input
              invalid={emailError}
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              required
              onFocus={(e) => onFocusInput(e.target.name)}
              id="userEmail"
              placeholder="Enter your email"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
