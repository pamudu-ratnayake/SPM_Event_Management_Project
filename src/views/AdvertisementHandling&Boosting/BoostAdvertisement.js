// reactstrap components
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
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
import PaymentModal from "views/PaymentHandling/PaymentModal";
import axios from "axios";
// core components
import BoostAddHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/BoostAddHeader";

import { useFormik } from "formik";


const BoostAdvertisement = (props) => {
  console.log("Id is: ", props.match.params._id);



  const [addsData, setAdd] = useState(0);

  const [notificationModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!notificationModal);
  }



  
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

  const today = new Date();
  const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log("kl",currentDate)


var boosting_Package = ['1 day','3 day','5 day','10 day','20 day','30 day']
const [newPackage, setnewPackage] = useState(null);


const [boostPK, setBoostPK] = useState('');



function totalcal(event) {
     
     

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
  boosting_Pack: boostPK,
  total:total,
};

    //Yup validations
    const validationSchema = Yup.object({
      boosting_Pack: Yup.string().required("Required"), 
      total: Yup.string().required("Required")
  
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
          console.log(error);
        });
    };
  

 const formik = useFormik({
    onSubmit,
    enableReinitialize: true,
    validateOnMount: true,
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
                  
                  <p>
                 <h1> What does it mean to boost an Advertisement? </h1>
                 
<h5>After you have created an event on your Page, you may boost it to help spread the word and encourage people to attend.
Let's look at an example of how promoting an event might help you achieve your objectives.</h5>
<br></br>

<h3>Boosting an Advertisement :- </h3>

<h5>By boosting an Advertisement, it will extend the duration of the advertisement.
The boosting advertisement appear to customers and they continue to focus to the service providers and their services.</h5>

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
                        onChange={totalcal}
                        onInput = {(e) => {setBoostPK(e.target.value)}}
                        onBlur={formik.handleBlur}
                       
                          id="boosting_Pack"
                          name="boosting_Pack"
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
                  <Col xs="4">{total}</Col>
                  <Col xs="3">
                  
                  
                  <PaymentModal
	// Use a unique value for the orderId
  orderId={addsData._id}
  user_name={addsData.service_Provider_Name}
	user_email={addsData.email_SP}
  current_date={currentDate}
  amount="1000.00"
  boostTY = "advertisment"
	name={addsData.advertisement_title}
      />
                  </Col>
                </Row>
              </CardText>
               

</CardBody>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right mr-4" xs="4">
                    <Link
                              to={`/serviceprovider/viewadvertisement`}
                            >
                      <Button
                        color="primary"
                        onClick={() => {onSubmit(formik.values)}}
                        size="lm"
                      >
                        Boost My Advertisement
                      </Button>
                      </Link>
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
