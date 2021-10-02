// Event_Support

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Container,
  Col,
  CardText,
  FormGroup,
  Row,
} from "reactstrap";
// core components
import UserHeaderEventSupport from "components/Headers/UserHeaderEventSupport.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "variables/tokenURL";

const validationSchema = Yup.object({
  // answers: Yup.string().required("Required!"),
});

const Event_Support = (props) => {
  const [issue, setIssue] = useState([]);
  const [searchStr, setSearch] = useState("");
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    // issue: '',
    // eventObj: {
    //   _id: issue._id,
    //   event_name: issue.event_name,
    //   date_of_the_event: issue.date_of_the_event,
    //   event_time: issue.event_time,
    //   location: issue.location,
    //   days_occurs: issue.days_occurs,
    //   event_type: issue.event_type,
    //   description: issue.description,
    // },
    // answers: [issue.answers],
    answers: issue.answers,
  };

  useEffect(() => {
    API.get("/consulting/getIssues")
      .then((res) => {
        setIssue(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (values, _id) => {
    console.log("form data", values);
    console.log("Id is:", _id);

    // e.preventDefault()

    API.post(`/consulting/addAnswer/${_id}`, values)
      .then((res) => {
        console.log(res.data);
        console.log("data", values);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <UserHeaderEventSupport />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row>
              <Col xl="6">
                <h2 className="mb-0"> Event Consulting</h2>
              </Col>
              <Col xs="2">
                <div>
                  <Input
                    type="text"
                    placeholder="Search..."
                    style={{
                      borderWidth: "2.5px",
                      width: "30rem",
                      height: "2rem",
                      textAlign: "left",
                      borderRadius: "15px",
                    }}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </Col>
              {/* <Col className="col text-right" xl="">
                <Link to={"/customer/my-event"}>
                  <Button color="primary" size="sm" name="">
                    My Event
                  </Button>
                </Link>
              </Col> */}
            </Row>
          </CardHeader>
          <CardBody>
            {issue
              .filter((r) => {
                if (searchStr === "") {
                  return r;
                } else if (
                  r.issue.toLowerCase().includes(searchStr.toLowerCase())
                ) {
                  return r;
                }
              })
              .map((issue, index) => (
                <div className="mb-4 " key={issue._id}>
                  <Card className="mb-0">
                    <CardHeader>
                      <Row className="h5 mt-1">
                        {issue.eventObj.event_name} will take place on{" "}
                        {issue.eventObj.date_of_the_event}, at{" "}
                        {issue.eventObj.event_time} in {issue.eventObj.location}
                        The event will take place over the course of{" "}
                        {issue.eventObj.days_occurs} days. This event will be
                        held {issue.eventObj.event_type}.
                      </Row>
                      <Row className="h5 mt-1">
                        {issue.eventObj.description}
                      </Row>
                      </CardHeader>
                    <CardBody className="pt-1 pt-md-3 pb-3">
                      <CardText className="h5 pt-2 pb-2">
                        <h5>
                          <em>{issue.issue}</em>
                        </h5>
                      </CardText>
                    {/* </CardBody>
                  </Card> */}
                  <div className="ml-6">
                    {/* <Form onSubmit={formik.handleSubmit}> */}
                    <Form>
                      {/* <Card className="card-stats mb-1">
                        <CardBody> */}
                          <Row>
                            <Col xl="12">
                              <FormGroup>
                                <Input
                                  id="exampleFormControlTextarea1"
                                  placeholder="Type your response here"
                                  rows="5"
                                  type="textarea"
                                  name="answers"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                {formik.touched.answers &&
                                formik.errors.answers ? (
                                  <div style={{ color: "red" }}>
                                    {formik.errors.answers}
                                  </div>
                                ) : null}
                              </FormGroup>
                            {/* </Col>
                            <Col xl="2"> */}
                              <Button
                                color="success"
                                size="sm"
                                type="submit"
                                onClick={() =>
                                  onSubmit(formik.values, issue._id)
                                }
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-active-40" />
                                </span>
                                <span className="btn-inner--text">Publish</span>
                              </Button>
                            </Col>
                          </Row>
                          {issue.answers &&
                            issue.answers.map((answer, index) => {
                              return (
                                <Row className="mt-4" key={index}>
                                  {answer}
                                </Row>
                              );
                            })}
                        {/* </CardBody>
                      </Card> */}
                    </Form>
                  </div>

                  </CardBody>
                  </Card>
                </div>
              ))}
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Event_Support;
