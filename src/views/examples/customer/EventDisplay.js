import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import API from "variables/tokenURL";

// reactstrap components
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
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Table,
  Label,
} from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useState } from "react";

const EventDisplay = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [event, setEvent] = useState(0);

  const [defaultModal, setState] = useState(false);
  const [notificationModal, setModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [reviews, setReviewInput] = useState("");
  const [hover, setHover] = useState(null);
  const [acceptedQuotations, setAcceptedQuotations] = useState([]);
  const [SPID, setSPID] = useState("");

  //toggle function
  function toggleModal() {
    setState(!defaultModal);
  }

  function toggleModalNotification() {
    setModal(!notificationModal);
  }

  console.log("rating", rating);
  // console.log("xxx", providerID);
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    review: "",
  };

  //useEffect
  useEffect(async () => {
    await API.get(`/eventAdd/getOneEvent/${props.match.params._id}`)
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

  const setID = (providerID) => {
    setSPID(providerID);
  };

  console.log("come to this", SPID);

  const setReview = () => {
    var rates = {
      review_rate: {
        rate: rating,
        review: reviews,
      },
    };

    API.post(`/serviceProvider/review-update/${SPID}`, rates)
      .then((res) => {
        console.log(res.data);
        console.log("Data", rates);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
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
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => toggleModal("defaultModal")}
                    >
                      Service Providers
                    </Button>
                  </Col>
                  <Col className="text-right" xs="2">
                    <Link to={`/customer/selectservice-proivider/${event._id}`}>
                      <Button color="primary" size="sm">
                        Quotations
                      </Button>
                    </Link>

                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={defaultModal}
                      toggle={() => toggleModal("defaultModal")}
                    >
                      <div className="modal-header">
                        <h6
                          className="modal-title"
                          id="modal-title-notification"
                        >
                          Give your Rate & Review
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => toggleModal("defaultModal")}
                        >
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
                                      <td>
                                        <Button
                                          onClick={function (event) {
                                            toggleModalNotification("notificationModal");
                                            setID(acceptedQuotations.provider_id._id);
                                          }}
                                          className="btn-icon btn-2 "
                                          size="sm"
                                          color="danger"
                                          type="button"
                                        >
                                          <span className="btn-inner--icon-center">
                                            <i className="ni ni-like-2" />
                                          </span>
                                        </Button>
                                        <Link to={`/customer/view-quotations/${acceptedQuotations._id}`}>
                                          <Button className="btn-icon btn-2 " size="sm" color="success" type="button">
                                            <span className="btn-inner--icon-center">
                                              <i className="ni ni-like-2" />
                                            </span>
                                          </Button>
                                          </Link>
                                          <Link
                                            to={`/customer/view-quotations/${acceptedQuotations._id}`}
                                          >
                                            <Button
                                              className="btn-icon btn-2 "
                                              size="sm"
                                              color="primary"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon-center">
                                                <i className="ni ni-glasses-2" />
                                              </span>
                                            </Button>
                                          </Link>
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </Table>
                            </CardBody>
                          </Card>
                        </Col>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="btn-white"
                          color="default"
                          type="button"
                        >
                          Ok, Got it
                        </Button>
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => toggleModal("defaultModal")}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>

                  <Modal
                    className="modal-dialog-centered modal-danger"
                    contentClassName="bg-gradient-danger"
                    isOpen={notificationModal}
                    toggle={() => toggleModalNotification("notificationModal")}
                  >
                    <div className="modal-header">
                      <h6 className="modal-title" id="modal-title-notification">
                        Your attention is required
                      </h6>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() =>
                          toggleModalNotification("notificationModal")
                        }
                      >
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
                                <Input
                                  style={{ display: "none" }}
                                  type="radio"
                                  name="rating"
                                  value={ratingValue}
                                  onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                  className="star"
                                  color={
                                    ratingValue <= (hover || rating)
                                      ? "#ffc107"
                                      : "#e4e5e9"
                                  }
                                  size={50}
                                  onMouseOver={() => setHover(ratingValue)}
                                  onMouseOut={() => setHover(null)}
                                />
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <Col md="12">
                        <FormGroup>
                          <h4 className="heading mt-4">Review</h4>
                          <Input
                            id="exampleFormControlTextarea1"
                            placeholder="Enter Your Review..."
                            rows="3"
                            type="textarea"
                            name="review"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={review}
                            onInput={(e) => {
                              setReviewInput(e.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
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
                      <Button
                        className="text-white ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                        onClick={() =>
                          toggleModalNotification("notificationModal")
                        }
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Row>
                      <Col md="2">Event Name</Col>
                      <Col md="4">: {event.event_name}</Col>
                      <Col md="2">Event Type</Col>
                      <Col md="4">: {event.event_type}</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Organization Name</Col>
                      <Col md="4">: {event.org_name}</Col>
                      <Col md="2">Date of The Event</Col>
                      <Col md="4">: {event.date_of_the_event}</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Event Time</Col>
                      <Col md="4">: {event.event_time}</Col>
                      <Col md="2">Days Event Occurs</Col>
                      <Col md="4">: {event.days_occurs} day</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Event Closing Date</Col>
                      <Col md="4">: {event.date_of_the_event_end}</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Required Services</Col>

                      <Col md="8">
                        :
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
                    </Row>
                  </FormGroup>

                  <h2 className="mt-5 mb-4">Contact Information</h2>
                  <FormGroup>
                    <Row>
                      <Col md="2">Organizer Name</Col>
                      <Col md="4">: {event.organizer_name}</Col>
                      <Col md="2">Organizer's NIC</Col>
                      <Col md="4">: {event.org_nic}</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Email</Col>
                      <Col md="4">: {event.cus_email}</Col>
                      <Col md="2">Contact Number </Col>
                      <Col md="4">: {event.cus_con_number}</Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col md="2">Description</Col>
                      <Col md="10">: {event.description}</Col>
                    </Row>
                  </FormGroup>
                  <br />
                  <br />
                  <br />

                  {/* <Row>
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
                  </Row> */}

                  <Row>
                    <Col className="col text-center"
                    style={{ paddingRight: "10rem" }}>
                      <Link to={`/customer/boostEvent/${event._id}`}>
                        <Button color="primary" size="lm">
                          Boost My Event
                        </Button>
                      </Link>
                    </Col>

                    <Col
                      className="text-right"
                      xs="5"
                      style={{ paddingRight: "10rem" }}
                    >
                      <Link to={`/customer/My_Issue/${event._id}`}>
                        <Button color="primary">Take Support</Button>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col className="text-right" xs="8"
                    style={{ paddingLeft: "10rem" , paddingRight:"3rem"}}>
                      <Link
                        to={`/customer/Sponsorship_Documentation/${event._id}`}
                      >
                        <Button color="primary">
                          Create Sponsorship Request
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
