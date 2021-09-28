import ReactDatetime from "react-datetime";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "../FormikControl";
//import { moment } from "moment";
import DatePicker from "react-datepicker";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
// core components
import UpdateEventHeader from "components/Headers/UpdateEventHeader";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//type of the phone number
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const UpdateEvent = (props) => {
  // function AddEvent(props) {

  // let date = '';
  // const [event_date, setDate] = useState(date);

  // const makeDate = () => {
  //   date = values.date_event.format('DD-MM-YYYY');
  //   setDate(date);
  // }

  // useEffect(() => {
  //   makeDate();
  // },[]);

  // const checkboxOptions = [
  //   { key: "Option 01", value: "cOption1" },
  //   { key: "Option 02", value: "cOption2" },
  //   { key: "Option 03", value: "cOption3" },
  // ];

  const [event, setEvent] = useState(0);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    event_name: event.event_name,
    org_name: event.org_name,
    event_time: event.event_time,
    date_of_the_event: event.date_of_the_event,
    location: event.location,
    days_occurs: event.days_occurs,
    event_type: event.event_type,
    organizer_name: event.organizer_name,
    org_nic: event.org_nic,
    cus_email: event.cus_email,
    cus_con_number: event.cus_con_number,
    description: event.description,
    // checkboxOption: [],
  };

  const validationSchema = Yup.object({
    event_name: Yup.string().required("*Required!"),
    org_name: Yup.string().required("*Required!"),
    event_time: Yup.string().required("*Required!"),
    location: Yup.string().required("*Required!"),
    days_occurs: Yup.number().required("*Required!").max(20, "Limit exceed").min(0, "Invalid number"),
    event_type: Yup.string().required("*Required!"),
    organizer_name: Yup.string().required("*Required!"),
    org_nic: Yup.string().required("*Required!"),
    cus_email: Yup.string().email("*Invalid email!").required("*Required!"),
    cus_con_number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("*Required!").min(10, "Too short").max(10, "Too long"),
    description: Yup.string().required("*Required!"),
    date_of_the_event: Yup.string().required("*Required!"),
    // checkboxOption: Yup.array().required("Required"),
  });

  //using history
  let history = useHistory();

  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    axios
      .put(`http://localhost:8080/eventAdd/updateevent/${props.match.params._id}`, values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        history.push({
          pathname: `/customer/my-event`,
        });
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

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <UpdateEventHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Update Details of The Event</h1>
                  </Col>

                </Row>
              </CardHeader>
              <CardBody>
                {/* <Form onSubmit={formik.handleSubmit}> */}
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Event Name"
                          type="text"
                          name="event_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.event_name}
                        >
                        </Input>
                        {formik.touched.event_name && formik.errors.event_name ? <div style={{ color: "red" }}>{formik.errors.event_name}</div> : null}
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <label>Event Type</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                          name="event_type"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.event_type}
                        >
                          <option>{event.event_type}</option>
                          <option>Indoor</option>
                          <option>Outdoor</option>
                        </Input>
                        {formik.touched.event_type && formik.errors.event_type ? <div style={{ color: "red" }}>{formik.errors.event_type}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Organization Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Organization Name"
                          type="text"
                          name="org_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.org_name}
                        />
                        {formik.touched.org_name && formik.errors.org_name ? <div style={{ color: "red" }}>{formik.errors.org_name}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Date of The Event</label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                            {formik.touched.date_of_the_event && formik.errors.date_of_the_event ? <div style={{ color: "red" }}>{formik.errors.date_of_the_event}</div> : null}
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "MM/DD/YY",
                            }}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(value) =>
                              formik.handleChange({
                                target: {
                                  name: "date_of_the_event",
                                  value,
                                },
                              })
                            }
                            onBlur={formik.handleBlur}
                            defaultValue={event.date_of_the_event}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Time</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Time of the Event"
                          type="text"
                          name="event_time"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.event_time}
                        />
                        {formik.touched.event_time && formik.errors.event_time ? <div style={{ color: "red" }}>{formik.errors.event_time}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Location</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="text"
                          name="location"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.location}
                        />
                        {formik.touched.location && formik.errors.location ? <div style={{ color: "red" }}>{formik.errors.location}</div> : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Days Event Occurs</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Number of Days"
                          type="number"
                          name="days_occurs"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.days_occurs}
                        />
                        {formik.touched.days_occurs && formik.errors.days_occurs ? <div style={{ color: "red" }}>{formik.errors.days_occurs}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <label className="mb-3">Required Services</label>
                  <Row>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck1" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Photography
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck2" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck2">
                          Sound Provider
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck3" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck3">
                          Florist
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck4" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck4">
                          Catering
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck5" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck5">
                          Cake Designer
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck6" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck6">
                          Costume Designer
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck7" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck7">
                          Event Planner
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck8" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck8">
                          Decorators
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck9" type="checkbox" />
                        <label className="custom-control-label" htmlFor="customCheck9">
                          Dancers
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  <h2 className="mt-4 mb-4">Contact Information</h2>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="text"
                          name="organizer_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.organizer_name}
                        />
                        {formik.touched.organizer_name && formik.errors.organizer_name ? <div style={{ color: "red" }}>{formik.errors.organizer_name}</div> : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Oraganizer NIC</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="NIC Number"
                          type="text"
                          name="org_nic"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.org_nic}
                        />
                        {formik.touched.org_nic && formik.errors.org_nic ? <div style={{ color: "red" }}>{formik.errors.org_nic}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="text"
                          name="cus_email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.cus_email}
                        />
                        {formik.touched.cus_email && formik.errors.cus_email ? <div style={{ color: "red" }}>{formik.errors.cus_email}</div> : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Number of Days"
                          type="text"
                          name="cus_con_number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.cus_con_number}
                        />
                        {formik.touched.cus_con_number && formik.errors.cus_con_number ? <div style={{ color: "red" }}>{formik.errors.cus_con_number}</div> : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          id="exampleFormControlTextarea1"
                          placeholder="Description..."
                          rows="3"
                          type="textarea"
                          name="description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={event.description}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* {({formik}) => {  
                    <FormikControl 
                     control="checkbox"
                     label="Checkbox topic"
                     name="checkboxOption" 
                     option={checkboxOptions} />
                  }} */}
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Update Event
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateEvent;
