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
      <UserHeaderMyIssue />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h2 className="mb-0"> Event Support</h2>
          </CardHeader>
          <CardBody>
            <Card className="mb-1">
              <CardBody className="pt-1 pt-md-0 pb-1">
                <div>
                  <CardText className="h5 mt-1">
                    <Row>
                      <Col xs="3">Event Name</Col>
                      <Col xs="6">NUHIuoIJIN KJNJOJ</Col>
                    </Row>
                  </CardText>
                  <CardText className="h5 mb-1">
                    <Row>
                      <Col xs="3">Event Discription</Col>
                      <Col xs="6">NUHIuoIJIN KJNJOJ</Col>
                    </Row>
                  </CardText>
                  <CardText className="h5 pt-2 pb-2"> Question?</CardText>
                </div>
              </CardBody>
            </Card>

            <div>
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
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Event_Support;
