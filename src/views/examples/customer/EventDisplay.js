import ReactDatetime from "react-datetime";
import axios from "axios";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useState } from "react";

const EventDisplay = (props) => {
  console.log("ID is : ", props.match.params._id);

  const [event, setEvent] = useState(0);

  //useEffect
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
      <ViewEventHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Details of The Event</h1>
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
                        <label>Event Type : </label>
                        <label className="ml-3"> {event.event_type} </label>
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
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">Required Services : </label>
                    </Col>
                  </Row>
                  {/* <Col>
                  {
                    event.checkboxOption.map(function(checkbox, index){
                      return <label className="ml-5" key={index}> {checkbox.title} </label>

                    })
                  }
                  </Col> */}
                  {/* {(arrayHelper) => (
                    <Col>
                      {event.checkboxOption.map((checkboxOption, index) => {
                        // const boxValue = `event.chechboxOption.${index}`;
                        return <label className="ml-5">{checkboxOption[index]}</label>
                      })}
                    </Col>
                  )} */}

                  {/* ----------- This one is correct---------------- */}

                {/* {(arrayHelper) => (
                  <div>
                  {event.checkboxOption.map(boxValue => {
                      return <label className="ml-5" key={boxValue.checkboxOption}> {boxValue.checkboxOption[0]}  </label>
                    }
                    )} 
                    </div>            
                    )}      */}

                    {/* ---------------------------------------------------------- */}

                  {/* <Col>
                    <label className="ml-5"> </label>
                  </Col>
                  <Col>
                    <label className="ml-5"> Photography </label>
                  </Col>
                  <Col>
                    <label className="ml-5"> Sound Provider</label>
                  </Col>
                  <Col>
                    <label className="ml-5">Decorators</label>
                  </Col>
                  <Col>
                    <label className="ml-5">Dancers</label>
                  </Col> */}

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
