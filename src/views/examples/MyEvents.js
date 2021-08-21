import ReactDatetime from "react-datetime";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from "reactstrap";
// core components
import AddEventHeader from "components/Headers/AddEventHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyEvents = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/eventAdd/getevents`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
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
                    <h1 className="mb-0">Published Events</h1>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Service Providers
                    </Button>
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
                              <Link to={`/admin/event-display/${posts._id}`} >
                              <DropdownItem >
                                View Event
                              </DropdownItem>
                              </Link>
                              <Link to={`/admin/event-update/${posts._id}`} >
                              <DropdownItem>
                                Update Event
                              </DropdownItem>
                              </Link>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                Delete Event
                              </DropdownItem>
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
