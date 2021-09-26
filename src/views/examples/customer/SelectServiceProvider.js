import ReactDatetime from "react-datetime";

// reactstrap components
import { Button, Modal, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table, Label } from "reactstrap";
// core components
import EventListHeader from "components/Headers/EventListHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "variables/tokenURL";

const SelectServiceProvider = (props) => {
  const [posts, setPosts] = useState([]);

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
                    <h1 className="mb-0">Select Service Providers</h1>
                  </Col>
                  <Col className="text-right" xs="4">
                <Label>Sort by: </Label>
                      <Button color="primary" size="sm">
                        Publish An Event
                      </Button>

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Service Provider</th>
                      <th scope="col">Service Type</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Total</th>
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
                                  <Button color="primary" type="button" >
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

export default SelectServiceProvider;