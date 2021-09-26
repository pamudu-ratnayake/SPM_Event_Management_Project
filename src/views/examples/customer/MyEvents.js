import ReactDatetime from "react-datetime";
import API from "variables/tokenURL";
// reactstrap components
import { Button, Modal, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from "reactstrap";
// core components
import EventListHeader from "components/Headers/EventListHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setConstantValue } from "typescript";

const MyEvents = (props) => {
  const [posts, setPosts] = useState([]);
  const today = new Date();
  const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getTime();
  const [status, setStatus] = useState();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    
    API.get(`/eventAdd/getevents`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [exampleModal, setmodalDemo] = useState(false);

  //toggle function
  function toggleModal() {
    setmodalDemo(!exampleModal);
  }

  const deleteEvent = (_id) => {
    axios
      .delete(`http://localhost:8080/eventAdd/deleteevent/${_id}`)
      .then((response) => {
        console.log(response);
        // props.history.push('/admin');
      })
      .catch((error) => {
        console.log(error);
      });

    //refreshing
    window.location.reload(false);
  };

  console.log('status', currentDate);

  return (
    <>
      <EventListHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Published Events</h1>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to={"/admin/add-event"}>
                      <Button color="primary" size="sm">
                        Publish An Event
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Event Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Location</th>
                      <th scope="col">Event Type</th>
                      <th scope="col">Event Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((posts) => (
                      <tr key={posts._id}>
                        <td> {posts.event_name} </td>
                        <td> {posts.date_of_the_event} </td>
                        <td> {posts.location} </td>
                        <td> {posts.event_type} </td>
                        <td> {()=> {
                          if(posts.date_of_the_event_end < currentDate )
                            setStatus("Opend");
                          else
                            setStatus("Closed");   
                            console.log('ssssssssssssssssss')                   
                        }} {status} </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}>
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <Link to={`/admin/event-display/${posts._id}`}>
                                <DropdownItem>View Event</DropdownItem>
                              </Link>
                              <Link to={`/admin/event-update/${posts._id}`}>
                                <DropdownItem>Update Event</DropdownItem>
                              </Link>
                              <DropdownItem onClick={() => toggleModal("exampleModal")}> Delete Event</DropdownItem>

                              <Modal className="modal-dialog-centered" isOpen={exampleModal} toggle={() => toggleModal("exampleModal")}>
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">
                                    Confirm to delete this event
                                  </h5>
                                  <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">Do you want to delete this event?</div>
                                <div className="modal-footer">
                                  <Button color="primary" type="button" onClick={deleteEvent.bind(props.this, posts._id)}>
                                    Confirm Delete
                                  </Button>
                                  <Button color="secondary" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                                    Close
                                  </Button>
                                </div>
                              </Modal>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyEvents;
