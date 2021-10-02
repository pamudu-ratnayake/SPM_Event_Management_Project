// reactstrap components
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import PaymentModal from "views/PaymentHandling/PaymentModal";
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
import API from "variables/tokenURL";

const BoostEvent = (props) => {
  console.log("ID is : ", props.match.params._id);

  const user = JSON.parse(localStorage.getItem('profile'));

  const [event, setEvent] = useState(0);

  const [boostPK, setBoostPK] = useState('');

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

const total = newPackage;

const initialValues = {
  enableReinitialize: true,
  validateOnMount: true,
  boosting_Event:boostPK,
  boosting_Purpose:"",
  // total:total,
};


  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    API
      .put(`/eventAdd/boostevent/${props.match.params._id}`, values)
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
    API
      .get(`eventAdd/getOneEvent/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const [notificationModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!notificationModal);
  }
  //Yup validations
  const validationSchema = Yup.object({
    boosting_Event: Yup.string().required("Required"),
    boosting_Purpose: Yup.string().required("Required"),
    
    
  });
  const today = new Date();
  const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

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
                      <span className="btn-inner--icon">
                        < i className="ni ni-key-25"/>
                        </span>
                        <span className="btn-inner--text">
                        What's Boosting
                        </span>
                      </Button>
                      </Col>
                      
                      <Modal
              className="modal-dialog-centered modal-Success"
              contentClassName="bg-gradient-primary"
              isOpen={notificationModal}
              toggle={() => toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Event Boosting 
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
                  
                  <p>
                 <h1> What does it mean to boost an event? </h1>
                 
<h5>After you have created an event on your Page, you may boost it to help spread the word and encourage people to attend.
Let's look at an example of how promoting an event might help you achieve your objectives.</h5>
<br></br>

<h3>Boosting an event :- </h3>

<h5>By boosting an event, it will be added to the top event list.
The boosting events appear to service providers as 
top events, and service providers continue to focus to the top events.</h5>

<br></br></p>
<p className="text-left">
<h3>Prcing for event boosting :-</h3></p>

<p><ul className="ml-4">

<li>For One day     ----- LKR.500</li>
<li>For Three days  ----- LKR.750</li>
<li>For Five days   ----- LKR.1000</li>
<li>For Ten days    ----- LKR.1500</li>
<li>For Twenty days ----- LKR.3000</li>
<li>For Thirty days ----- LKR.5000</li>
                 </ul> </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={() => toggleModal("notificationModal")}>
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
                        onChange = {handleChange}
                        onInput = {(e) => {setBoostPK(e.target.value)}}
                        onBlur={formik.handleBlur}
                        
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
                  <Col xs="4"
                  >
                  {total}</Col>
                  <Col xs="3">
                  <PaymentModal
	// Use a unique value for the orderId
	
	name={event.event_name}
  boostTY = "event"
  date_occur={event.date_of_the_event}
	amount="1000.00"
  user_email={event.cus_email}
  orderId={event._id}
  user_name={event.org_name}
  current_date={currentDate}
  fname={user?.result?.firstName}
  lname={user?.result?.lastName}

   />
                      </Col>

                </Row>
              </CardText>
       </CardBody>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right mr-4" xs="7" 
                    style={{paddingLeft:"18rem"}}>
                    <Link to={`/customer/event-display`}>
                      <Button
                        color="primary"
                        onClick={() => {onSubmit(formik.values)}}
                        size="lm"
                      ><span className="btn-inner--icon">
                        < i className="ni ni-credit-card"/>
                        </span>
                        <span className="btn-inner--text">
                        Boost My Event
                        </span>
                      </Button>
                      </Link>
                    </Col>
                    <Col className="col text-right ml-6" xs="6">
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
