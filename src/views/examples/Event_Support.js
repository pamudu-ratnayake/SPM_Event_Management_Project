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
  CardText,
  CardTitle,
  CardFooter,
} from "reactstrap";
// core components
import UserHeaderEventSupport from "components/Headers/UserHeaderEventSupport.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  regNo: Yup.string().required("Required!"),
  companyName: Yup.string().required("Required!"),
  sponsorType: Yup.string().required("Required!"),
  SponsorPhoneNo: Yup.string()
    .matches(phoneRegExp, "Phone Number is not Valid!")
    .required("Required!")
    .min(10, "Too short")
    .max(10, "Too long"),
  sponsorEmail: Yup.string().email("Invalid Email!").required("Required!"),
});

const Event_Support = () => {
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    regNo: "",
    companyName: "",
    sponsorType: "",
    SponsorPhoneNo: "",
    sponsorEmail: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);

    // values.id = ID;

    axios
      .post("http://localhost:8080/sponsor/addSponsors", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);

        // history.push({
        //   pathname:`/admin/SponsorList`
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
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
            <div className="mb-4">
              <Card className="mb-1">
                <CardText className="h5 mt-1">
                  Phantom League Cricket Match
                </CardText>
                <CardText className="h5 mt-1">
                  Have many activities. 250+ Crowd. 1 day event.
                </CardText>
                <CardBody className="pt-1 pt-md-0 pb-1">
                  <CardText className="h5 pt-2 pb-2">
                    <Col>
                      <em>
                        I want to create a well structured match schedule for
                        finish 10 matches as a one day event?
                      </em>
                    </Col>
                  </CardText>
                </CardBody>
              </Card>
              <div className="ml-6">
                <Form>
                  <Card className="card-stats mb-1">
                    <CardBody>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Type your response here"
                        rows="3"
                        type="textarea"
                      />
                    </CardBody>
                  </Card>
                </Form>
              </div>
            </div>

            <div className="mb-4">
              <Card className="mb-1">
                <CardBody className="pt-1 pt-md-0 pb-1">
                  <div>
                    <CardText className="h5 mt-1">
                      <Row>
                        <Col xs="3">Event Name</Col>
                        <Col xs="6">NSBM Aurudu</Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 mb-1">
                      <Row>
                        <Col xs="3">Event Discription</Col>
                        <Col xs="6">
                          This is our annual Aurudu. 500+ students. Winners will
                          be awarded 200,000.00/= LKR.
                        </Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 pt-2 pb-2">
                      <em> How many events can be cover withing one day?</em>
                    </CardText>
                  </div>
                </CardBody>
              </Card>
              <div className="ml-6">
                <Form>
                  <Card className="card-stats mb-1">
                    <CardBody>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Type your response here"
                        rows="3"
                        type="textarea"
                      />
                    </CardBody>
                  </Card>
                </Form>
              </div>
            </div>

            <div className="mb-4">
              <Card className="mb-1">
                <CardBody className="pt-1 pt-md-0 pb-1">
                  <div>
                    <CardText className="h5 mt-1">
                      <Row>
                        <Col xs="3">Event Name</Col>
                        <Col xs="6">IIT Halloween Party</Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 mb-1">
                      <Row>
                        <Col xs="3">Event Discription</Col>
                        <Col xs="6">200+ Crowd. Annual Halloween party</Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 pt-2 pb-2">
                      <em>
                        {" "}
                        What are the event items can be add to a Halloween
                        party?
                      </em>
                    </CardText>
                  </div>
                </CardBody>
              </Card>
              <div className="ml-6">
                <Form>
                  <Card className="card-stats mb-1">
                    <CardBody>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Type your response here"
                        rows="3"
                        type="textarea"
                      />
                    </CardBody>
                  </Card>
                </Form>
              </div>
            </div>

            <div className="mb-4">
              <Card className="mb-1">
                <CardBody className="pt-1 pt-md-0 pb-1">
                  <div>
                    <CardText className="h5 mt-1">
                      <Row>
                        <Col xs="3">Event Name</Col>
                        <Col xs="6">Tilan's Birthday Party</Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 mb-1">
                      <Row>
                        <Col xs="3">Event Discription</Col>
                        <Col xs="6">
                          100+ Crowd. Till midnight. want unlimited photos
                        </Col>
                      </Row>
                    </CardText>
                    <CardText className="h5 pt-2 pb-2">
                      <em> Question?</em>
                    </CardText>
                  </div>
                </CardBody>
              </Card>
              <div className="ml-6">
                <Form>
                  <Card className="card-stats mb-1">
                    <CardBody>
                      <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Type your response here"
                        rows="3"
                        type="textarea"
                      />
                    </CardBody>
                  </Card>
                </Form>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Event_Support;
