// reactstrap components
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  CardText,
  Form,
  Input,
  Container,
  Row,
  Col,
  Modal,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";

// core components
import BoostHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/BoostHeader";

import { useFormik } from "formik";

const BoostEvent = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [event, setEvent] = useState(0);

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

  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    axios
      .put(`http://localhost:8080/eventAdd/boostevent/${props.match.params._id}`, values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.push({
        //   pathname: `/admin/my-event`,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    boosting_Event:"",
    boosting_Purpose:""
  };

  const [notificationModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!notificationModal);
  }
  //Yup validations
  const validationSchema = Yup.object({
    boosting_Event: Yup.string().required("Required"),
    boosting_Purpose: Yup.string().required("Required"),
    
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <BoostHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h2 className="mb-0">Event Boosting Information</h2>
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
                        onChange = {handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boosting_event}
                          id="boosting_event"
                          name="boosting_event"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 day </option>
                          <option>3 day </option>
                          <option>5 day </option>
                          <option>10 day</option>
                          <option>20 day</option>
                          <option>30 day</option>
                        </Input>
                        {formik.touched.boosting_event &&
                        formik.errors.boosting_event ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.boosting_event}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    </Row>
                   
                  <Row>
                  <Col md="12">
                  <FormGroup>
                      <label>Boosting Purpose </label>
                      <Input
                        mb="3"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.boosting_Purpose}
                        id="boosting_Purpose"
                        name="boosting_Purpose"
                        placeholder="Enter your Boosting Purpose here ...................."
                        rows="2"
                        type="textarea"
                      />
                      {formik.touched.boosting_Purpose &&
                      formik.errors.boosting_Purpose ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.boosting_Purpose}
                        </div>
                      ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                    <CardBody>
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Event Name</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{event.event_name}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Date of The Event</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{event.date_of_the_event}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Organizer's Email</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{event.cus_email}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Organizer's NIC</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{event.org_nic}</Col>
                </Row>
              </CardText>
              <br></br>
                  <br></br>
                  <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Total Payment</Col>
                  <Col xs="1">:</Col>
                  <Col xs="4">{newPackage}</Col>
                  <Col xs="3">
                  <Button
                        color="primary"
                        onClick={() => {onSubmit(formik.values)}}
                        size="lm"
                      >
                        Pay Now
                      </Button>
                      </Col>

                </Row>
              </CardText>
       </CardBody>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right mr-4" xs="4">
                      <Link to = {`/authPayment/payment-method/`}>
                      <Button
                        color="primary"
                        onClick={() => {onSubmit(formik.values)}}
                        size="lm"
                      >
                        Boost My Event
                      </Button>
                      </Link>
                    </Col>
                    <Col className="col text-right ml-6" xs="6">
                    {/* <Link to={`/admin/event-update/${posts._id}`}> */}
                      <Button
                        color="primary"
                        size="lm"
                      >
                         Cancle 
                      </Button>
                      {/* </Link> */}
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

export default BoostEvent;
