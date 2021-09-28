import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import API from "variables/tokenURL";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup, Modal, Table } from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useState } from "react";

const ViewQuotation = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [quotation, setQuotation] = useState([]);
  const [event, setEvent] = useState(0);

  const [defaultModal, setState] = useState(false);
  const [notificationModal, setModal] = useState(false);


  //toggle function
  function toggleModal() {
    setState(!defaultModal);
  }

  function toggleModalNotification() {
    setModal(!notificationModal);
  }

  // function onStarClick(nextValue, prevValue, name) {
  //   setRating({ rating: nextValue });
  // }

  // console.log("rating", quotation.provider_id);

  const initialValues = {};

  // -------useEffect------------
  useEffect(async() => {
   await API
      .get(`/quotation/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setQuotation(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   // console.log('ll', quotation.event_id._id);
  //   API
  //     .get(`/eventAdd/getOneEvent/${quotation.event_id._id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setEvent(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  
  //  console.log('aa', event.org_name);
  // console.log('llqq', quotation.event_id.org_name);

  const formik = useFormik({
    initialValues,
  });

  return (
    <>
      <ViewEventHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="7">
                    <h1 className="mb-0">Quotation Details</h1>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Name : {quotation.terms && quotation.event_id.event_name} </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider Name : </label>
                        <label className="ml-3"> </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Type : </label>
                        <label className="ml-3">  </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider's Email : </label>
                        <label className="ml-3"></label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider Contact Number : </label>
                        <label className="ml-3">  </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Valid : to </label>
                        <label className="ml-3">  </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Terms : </label>
                        <label className="ml-3">  </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">Quotation Items : </label>
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

export default ViewQuotation;
