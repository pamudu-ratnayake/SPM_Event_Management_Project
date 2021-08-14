import ReactDatetime from "react-datetime";

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
} from "reactstrap";
// core components
import AddEventHeader from "components/Headers/AddEventHeader";

const AddEvent = () => {
  return (
    <>
      <AddEventHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Publish An Event</h1>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Service Providers
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Event Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event ID</label>
                        <Input disabled placeholder="Event ID" type="text" />
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
                        />
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
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Select the Date",
                            }}
                            timeFormat={false}
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
                        />
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
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Days Event Occurs</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Number of Days"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Type</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>Indoor</option>
                          <option>Outdoor</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <label className="mb-3">Required Services</label>
                  <Row>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck1"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Photography
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck2"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Sound Provider
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck3"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck3"
                        >
                          Florist
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck4"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck4"
                        >
                          Catering
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck5"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck5"
                        >
                          Cake Designer
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck6"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck6"
                        >
                          Costume Designer
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck7"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck7"
                        >
                          Event Planner
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck8"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck8"
                        >
                          Decorators
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck9"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck9"
                        >
                          Unchecked
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <h2 className="mt-5 mb-4">Contact Information</h2>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Customer ID</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Number of Days"
                          type="number"
                        />
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
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Number of Days"
                          type="number"
                        />
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
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button">
                      Publish Event
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

export default AddEvent;
