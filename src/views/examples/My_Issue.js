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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardText,
  CardTitle,
  CardFooter,
} from "reactstrap";
// core components
import UserHeaderMyIssue from "components/Headers/UserHeaderMyIssue.js";
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

const My_Issue = () => {
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
      <UserHeaderMyIssue />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h2 className="mb-0">What exactly would you like to know?</h2>
          </CardHeader>
          <CardBody>
            <Card
              style={({ width: "28rem" }, { height: "2.5rem" })}
              className="mb-1"
            >
              <CardBody className="pt-1 pt-md-0">
                <div>
                  <CardText>
                    <Row>
                      <Col xs="3">
                        <span
                          className="h5"
                          style={{ font: "menu" }}
                          className="mb-1"
                        >
                          Event Name
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="h5">
                          Annual Get Together of NIBM Students
                        </span>
                      </Col>
                    </Row>
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card
              style={({ width: "28rem" }, { height: "2.5rem" })}
              className="mb-4"
            >
              <CardBody className="pt-1 pt-md-0">
                <div>
                  <CardText>
                    <Row>
                      <Col xs="3">
                        <span className="h5" style={{ font: "menu" }}>
                          Event Description
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="h5">
                          Have many activities. 250+ Crowd. 2 days event.
                        </span>
                      </Col>
                    </Row>
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <div>
              <Form>
                <Card className="card-stats mb-1">
                  <CardBody>
                    <label>What is your Issue?</label>
                    <Input
                      id="exampleFormControlTextarea1"
                      placeholder="Write a large text here ..."
                      rows="3"
                      type="textarea"
                    />
                  </CardBody>
                  <Col className="mb-2">
                    <Link to={"/admin/Event_Support"}>
                      <Button color="primary" size="sm" type="button">
                        Publish
                      </Button>
                    </Link>
                  </Col>
                </Card>
              </Form>
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default My_Issue;
