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

const validationSchema = Yup.object({
  // answers: Yup.string().required("Required!"),
});

const Event_Support = (props) => {
  const [issue, setIssue] = useState([]);
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
    answers:[],
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/consulting/getIssues")
      .then((res) => {
        setIssue(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e,values,_id) => {
    console.log("form data", values);
    console.log('Id is:', _id)

    e.preventDefault()

    axios
      .put(
        `http://localhost:8080/consulting/updateIssue/${_id}`,
        values
      )
      .then((res) => {
        console.log(res.data);
        console.log('data', values);
      })
      .catch((error) => {
        console.log(error);
      });

      // history.push()
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
            <h2 className="mb-0"> Event Consulting</h2>
          </CardHeader>
          <CardBody>
            {issue.map((issue, index) => (
              <div className="mb-4" key={issue._id}>
                <Card className="mb-0">
                  <CardBody className="pt-1 pt-md-0 pb-1">
                    <CardText className="h5 mt-1">
                      {issue.eventObj.event_name} will take place on{" "}
                      {issue.eventObj.date_of_the_event}, at{" "}
                      {issue.eventObj.event_time} in {issue.eventObj.location}
                      The event will take place over the course of{" "}
                      {issue.eventObj.days_occurs} days. This event will be held{" "}
                      {issue.eventObj.event_type}.
                    </CardText>
                    <CardText className="h5 mt-1">
                      {issue.eventObj.description}
                    </CardText>
                    <CardText className="h5 pt-2 pb-2">
                      <Col>
                        <em>{issue.issue}</em>
                      </Col>
                    </CardText>
                  </CardBody>
                </Card>
                <div className="ml-6">
                  {/* <Form onSubmit={formik.handleSubmit}> */}
                  <Form>
                    <Card className="card-stats mb-1">
                      <CardBody>
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
                        {formik.touched.answers && formik.errors.answers ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.answers}
                          </div>
                        ) : null}
                        </FormGroup>
                        <Button
                          color="primary"
                          size="sm"
                          type="submit"
                          className="mt-2"
                         onClick={()=>onSubmit(formik.values,issue._id)}
                        >
                          add
                        </Button>
                        {/* {issue.answers.forEach((iss, i) => {
                          return ( */}
                            <Row className="mt-4" key={index}>
                              {issue.answers}
                            </Row>
                            {/* );
                        })} */}
                      </CardBody>
                    </Card>
                  </Form>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Event_Support;
