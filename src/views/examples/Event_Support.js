// Event_Support

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

const validationSchema = Yup.object({
  answers: Yup.string().required("Required!"),
});

const Event_Support = () => {
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    answers: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
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
                <CardBody className="pt-1 pt-md-0 pb-1">
                <CardText className="h5 mt-1">
                  Phantom League Cricket Match
                </CardText>
                <CardText className="h5 mt-1">
                  Have many activities. 250+ Crowd. 1 day event.
                </CardText>
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
                      <Button
                        color="primary"
                        size="sm"
                        type="submit"
                        className="mt-2"
                      >
                        add
                      </Button>
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
