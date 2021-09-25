// reactstrap components
import React, { useState,useEffect} from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  CardText,
  Modal,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
// core components
import BoostAddHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/BoostAddHeader";

import { useFormik } from "formik";


const BoostAdvertisement = (props) => {
  console.log("Id is: ", props.match.params._id);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    boosting_Pack:""
  };
  

  const [addsData, setAdd] = useState(0);

  const [notificationModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!notificationModal);
  }

  //Yup validations
  const validationSchema = Yup.object({
    boosting_Pack: Yup.string().required("Required"),

  });
  const onSubmit = (values) => {
    console.log("form data", values);
    axios
      .put(
        `http://localhost:8080/advertisement/boostadvertisement/${props.match.params._id}`, values)
      .then((res) => {
        console.log(res);
        // history.push({
        //   pathname: `/admin`,
        // });
        // history.pushState({
        //   pathname: ''
        // })
      })
      .catch((error) => {
        console(error);
      });
  };

  
 useEffect(() => {
    axios
      .get(`http://localhost:8080/advertisement/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setAdd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
var boosting_Package = ['1 day','3 day','5 day','10 day','20 day','30 day']
const [newPackage, setnewPackage] = useState(null);

function handleChange(event) {
     
     

     for (var i = 0; i < boosting_Package .length; i++){
       
      if(event.target.value == boosting_Package [i]);{

        switch(event.target.value)
       {
         case '1 day':
            setnewPackage('LKR. 500.00');

            break;
           
          case '3 day':
            setnewPackage('LKR. 750.00');
           
            break;
          
          case '5 day':
            setnewPackage('LKR. 1000.00');
            
            break;
           
          case '10 day':
            setnewPackage('LKR. 1500.00');
            break;
            
          case '20 day':
            setnewPackage('LKR. 3000.00');
            break;
           
          case '30 day':
            setnewPackage('LKR. 5000.00');
            break;
           
          default:
            setnewPackage('LKR. 00.00');
                  break;
       }
  
      }
      break;
  }
}
 const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema
  });
  return (
    <>
      <BoostAddHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h2 className="mb-0">Advertisement Boosting Information</h2>
                    </Col>
                    <Col className="col text-right" xs="6">
                    <Button 
                   
                    color="primary" 
                    size="lm"
                    onClick={() => toggleModal("notificationModal")}>
                        What's Boosting
                      </Button>
                      </Col>
                      
                      <Modal
              className="modal-dialog-centered modal-primary"
              contentClassName="bg-gradient-primary"
              isOpen={notificationModal}
              toggle={() => toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Advertisement Boosting 
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <p>
                    A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button">
                  Ok, Got it
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("notificationModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
            <Col className="text-right" xs="4"></Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                  <Col md="12" >
                      <FormGroup className = "text-center" >
                        <label>Select Boosting Package </label>
                        <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onChange = {handleChange}
                        value={formik.values.boosting_Pack}
                          id="boosting_Pack"
                          name="boosting_Pack"
                          type="select"
                        >
                          <option>Select Boosting Package</option>
                          <option>1 day </option>
                          <option>3 day </option>
                          <option>5 day </option>
                          <option>10 day</option>
                          <option>20 day</option>
                          <option>30 day</option>
                        </Input>
                        {formik.touched.boosting_Pack &&
                        formik.errors.boosting_Pack ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.boosting_Pack}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    </Row>
                    <CardBody>
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Service Provider Name</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{addsData.service_Provider_Name}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Service Provider Email</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{addsData.email_SP}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Service Provider Contact Number</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{addsData.contact_Number_SP}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Service Type</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{addsData.service_Type}</Col>
                </Row>
              </CardText>
              <br></br>
                  <br></br>
                  <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Total Payment</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{newPackage}</Col>
                </Row>
              </CardText>
               

</CardBody>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right mr-4" xs="4">
                      <Button
                        color="primary"
                        onClick={() => {onSubmit(formik.values)}}
                        size="lm"
                      >
                        Boost My Advertisement
                      </Button>
                    </Col>
                    <Col className="col text-right ml-6" xs="6">
                      <Button
                        color="primary"
                        size="lm"
                      >
                        Cancle  
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BoostAdvertisement;
