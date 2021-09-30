import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import API from "variables/tokenURL";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup, Modal, Table, Label } from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useState } from "react";

const EventDisplay = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [event, setEvent] = useState(0);

  const [defaultModal, setState] = useState(false);
  const [notificationModal, setModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [acceptedQuotations, setAcceptedQuotations] = useState([]);
  const [providerID, setID] = useState("");

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

  console.log("rating", rating);
  console.log("Provider ID : ", providerID);

  const initialValues = {};

  //useEffect
  useEffect(async () => {
    await axios
      .get(`http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`)
      .then(async (res) => {
        console.log(res);
        setEvent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    API.get(`/quotation/accepted-quotations/${props.match.params._id}`)
      .then((res) => {
        setAcceptedQuotations(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setReview = (ID) => {
    console.log("come to this", ID);
    // API.get(`/quotation/get/${acceptedQuotations._id}`)
    // .then((res) => {
    //   console.log(res);
    //   console.log('PR ID : ', res.data.provider_id._id)

    // API.put(`/serviceProvider/review-update/${res.data.provider_id._id}`)
    // .then((res)=> {
    //   console.log(res);
    //   console.log('Data', );
    // })
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

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
                    <h1 className="mb-0">Details of The Event</h1>
                  </Col>
                  <Col className="text-right" xs="3">
                    <Button color="primary" size="sm" onClick={() => toggleModal("defaultModal")}>
                      Service Providers
                    </Button>
                  </Col>
                  <Col className="text-right" xs="2">
                    <Link to={`/customer/selectservice-proivider/${event._id}`}>
                      <Button color="primary" size="sm">
                        Quotations
                      </Button>
                    </Link>

                    <Modal className="modal-dialog-centered modal-danger" contentClassName="bg-gradient-danger" isOpen={defaultModal} toggle={() => toggleModal("defaultModal")}>
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                          Give your Rate & Review
                        </h6>
                        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModal("defaultModal")}>
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <Col className="order-xl-1" xl="12">
                          <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                              <Row className="align-items-center">
                                <Col xs="8">
                                  <h1 className="mb-0">Service Providers</h1>
                                </Col>
                              </Row>
                            </CardHeader>
                            <CardBody>
                              <Table className="align-items-center" responsive>
                                <thead className="thead-light">
                                  <tr>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Location</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {acceptedQuotations.map((acceptedQuotations) => (
                                    <tr key={acceptedQuotations._id}>
                                      <td> {acceptedQuotations.provider_id.first_name} </td>
                                      <td> {acceptedQuotations.provider_id.service_type} </td>
                                      {/* {(providerID) => {
                                        setID(acceptedQuotations.provider_id.first_name);
                                      }} */}

                                      <td>
                                        <Button onClick={() => toggleModalNotification("notificationModal")} className="btn-icon btn-2 " size="sm" color="danger" type="button">
                                          <span className="btn-inner--icon-center">
                                            <i className="ni ni-like-2" />
                                          </span>
                                        </Button>
                                        <Link to={`/customer/view-quotations/${acceptedQuotations._id}`}>
                                          <Button className="btn-icon btn-2 " size="sm" color="primary" type="button">
                                            <span className="btn-inner--icon-center">
                                              <i className="ni ni-glasses-2" />
                                            </span>
                                          </Button>
                                        </Link>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </CardBody>
                          </Card>
                        </Col>
                      </div>
                      <div className="modal-footer">
                        <Button className="btn-white" color="default" type="button">
                          Ok, Got it
                        </Button>
                        <Button className="text-white ml-auto" color="link" data-dismiss="modal" type="button" onClick={() => toggleModal("defaultModal")}>
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>

                  <Modal className="modal-dialog-centered modal-danger" contentClassName="bg-gradient-danger" isOpen={notificationModal} toggle={() => toggleModalNotification("notificationModal")}>
                    <div className="modal-header">
                      <h6 className="modal-title" id="modal-title-notification">
                        Your attention is required
                      </h6>
                      <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModalNotification("notificationModal")}>
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="py-3 text-center">
                        <i className="ni ni-bell-55 ni-3x" />
                        <h4 className="heading mt-4">Rate Me!</h4>
                        <p>Rate and Give your comments about my service</p>

                        <div>
                          {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;

                            return (
                              <label>
                                <Input style={{ display: "none" }} type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                                <FaStar
                                  className="star"
                                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                  size={50}
                                  onMouseOver={() => setHover(ratingValue)}
                                  onMouseOut={() => setHover(null)}
                                />
                              </label>
                            );
                          })}
                        </div>

                        <Col md="12">
                          <FormGroup>
                            <label>Review</label>
                            <Input
                              id="exampleFormControlTextarea1"
                              placeholder="Enter Your Review..."
                              rows="3"
                              type="textarea"
                              name="review"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.review}
                            />
                          </FormGroup>
                        </Col>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <Button
                        onClick={() => {
                          setReview();
                        }}
                        className="btn-white"
                        color="default"
                        type="button"
                      >
                        Ok, Got it
                      </Button>
                      <Button className="text-white ml-auto" color="link" data-dismiss="modal" type="button" onClick={() => toggleModalNotification("notificationModal")}>
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Name : </label>
                        <label className="ml-3"> {event.event_name} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Type : </label>
                        <label className="ml-3"> {event.event_type} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organization Name : </label>
                        <label className="ml-3">{event.org_name}</label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Date of The Event : </label>
                        <label className="ml-3"> {event.date_of_the_event} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Time : </label>
                        <label className="ml-3"> {event.event_time} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Days Event Occurs : </label>
                        <label className="ml-3"> {event.days_occurs} day</label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Location : </label>
                        <label className="ml-3"> {event.location} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">Required Services : </label>
                    </Col>
                  </Row>

                  <Col>
                    {event.checkboxOption &&
                      event.checkboxOption.map((checkbox, index) => {
                        return (
                          <div className="ml-5" key={index}>
                            {" "}
                            <Label> {checkbox} </Label>
                          </div>
                        );
                      })}
                  </Col>

                  <h2 className="mt-5 mb-4">Contact Information</h2>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer Name : </label>
                        <label className="ml-3"> {event.organizer_name} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer's NIC : </label>
                        <label className="ml-3"> {event.org_nic} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Email : </label>
                        <label className="ml-3"> {event.cus_email} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number : </label>
                        <label className="ml-3"> {event.cus_con_number} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Description : </label>
                        <label className="ml-3"> {event.description} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="text-right" xs="4">
                  <Link to={`/customer/Sponsorship_Documentation/${event._id}`}>
                    <Button color="primary" href="#pablo">
                      Create Sponsorship Request
                    </Button>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Link to={`/customer/My_Issue/${event._id}`}>
                    <Button color="primary" href="#pablo">
                      Take Support
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

export default EventDisplay;
