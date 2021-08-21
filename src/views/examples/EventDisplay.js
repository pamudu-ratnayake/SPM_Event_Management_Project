import ReactDatetime from "react-datetime";
import axios from "axios";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
// core components
import AddEventHeader from "components/Headers/AddEventHeader";
import { useEffect, useState } from "react";

const EventDisplay = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [event, setEvent] = useState(0);

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
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
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
                        <label>Event Name : </label>
                        <label className="ml-3"> {event.event_name} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event ID : </label>
                        <label className="ml-3">gsfsf</label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organization Name : </label>
                        <label className="ml-3">{event.org_name}</label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Date of The Event : </label>
                        <label className="ml-3"> {event.date_of_the_event} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Time : </label>
                        <label className="ml-3"> {event.event_time} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Days Event Occurs : </label>
                        <label className="ml-3"> {event.days_occurs} day</label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Location : </label>
                        <label className="ml-3"> {event.location} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Type : </label>
                        <label className="ml-3"> {event.event_type} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">Required Services : </label>
                    </Col>
                  </Row>
                  <Col>
                    <label className="ml-5">gdsgds</label>
                  </Col>
                  <Col>
                    <label className="ml-5">gdsgds</label>
                  </Col>
                  <Col>
                    <label className="ml-5">gdsgds</label>
                  </Col>
                  <Col>
                    <label className="ml-5">gdsgds</label>
                  </Col>
                  <Col>
                    <label className="ml-5">gdsgds</label>
                  </Col>

                  <h2 className="mt-5 mb-4">Contact Information</h2>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer Name : </label>
                        <label className="ml-3"> {event.organizer_name} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer's NIC : </label>
                        <label className="ml-3"> {event.org_nic} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Email : </label>
                        <label className="ml-3"> {event.cus_email} </label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number : </label>
                        <label className="ml-3"> {event.cus_con_number} </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Description : </label>
                        <label className="ml-3"> {event.description} </label>
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

export default EventDisplay;
