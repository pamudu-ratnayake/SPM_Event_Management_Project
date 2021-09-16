// My_Issue

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
  CardText,
  UncontrolledTooltip,
  Alert,
} from "reactstrap";
// core components
import UserHeaderMyIssue from "components/Headers/UserHeaderMyIssue.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  issue: Yup.string().required("Required!"),
});

const My_Issue = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (values) => {};

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    issue: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <UserHeaderMyIssue />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <div className="col">
          <Card
            className="bg-secondary shadow"
            style={({ width: "28rem" }, { height: "50rem" })}
          >
            <CardHeader className="border-0">
              <Row>
                <Col className="border-0" xl="9">
                  <h3 className="mb-0">HI! We are here to help now ...</h3>
                </Col>
                <Col className="col text-right" xl="3">
                  <Link to={"/admin/Event_Support"}>
                    <Button color="primary" size="sm">
                      Search for Solution
                    </Button>
                  </Link>
                </Col>
              </Row>
            </CardHeader>

            <CardBody>
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Event Name</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.event_name}</Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Event Date</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.date_of_the_event}</Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Event Time</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.event_time}</Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Location</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.location}</Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Days Occurs</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.days_occurs}</Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Event Type</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">
                    <span>{posts.event_type}</span>
                  </Col>
                </Row>
              </CardText>

              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="3">Event Description</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{posts.description}</Col>
                </Row>
              </CardText>

              <Row>
                <Form onSubmit={formik.handleSubmit}>
                  <Col style={{ paddingTop: "2rem" }}>
                    <FormGroup>
                      <label>
                        What is your Question? (Above details will display with
                        the question)
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Write a large text here ..."
                        rows="3"
                        type="textarea"
                        name="issue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.issue}
                      />
                      {formik.touched.issue && formik.errors.issue ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.issue}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col className="mb-2 mt-4" style={{ paddingTop: "2rem" }}>
                    <Button
                      color="primary"
                      id="POST"
                      size="sm"
                      type="submit"
                      data-placement="top"
                      id="tooltip611234743"
                    >
                      Publish
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="tooltip611234743"
                    >
                      Question will publish for answering
                    </UncontrolledTooltip>
                  </Col>
                </Form>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default My_Issue;
