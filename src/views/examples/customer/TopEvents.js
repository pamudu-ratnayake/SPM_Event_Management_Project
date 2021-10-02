import ReactDatetime from "react-datetime";
import API from "variables/tokenURL";
// reactstrap components
import { Button, Modal, Card,Input, CardHeader, CardBody, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from "reactstrap";
// core components
import EventListHeader from "components/Headers/EventListHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setConstantValue } from "typescript";

const TopEvents = (props) => {
  const [posts, setPosts] = useState([]);
  const today = new Date();
  const currentDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + today.getTime();
  const [status, setStatus] = useState();
  const [searchStr, setSearch] = useState('');
  const [deleteID, setDeleteID] = useState('');

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    API.get(`/eventAdd/gettopevents/${user?.result?.service_type}`)
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


  console.log("status", currentDate);

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
                  <Col xs="6">
                    <h1 className="mb-0">Top Events</h1>
                  </Col>
                  <Col xs="4" >
                    <div style={{marginLeft:170}}>
                      <Input                      
                      type="text"
                        placeholder="Search..."
                        style={{ borderWidth: "2.5px", width: "15rem", height: "2rem",  textAlign: "left", borderRadius: "15px" }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}              
                      />
                    </div>
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
                    {/* {posts */}
                    {
                       posts.filter(r => {
                          if(searchStr === ""){
                              return r;
                          } else if (r.event_name.toLowerCase().includes(searchStr.toLowerCase())){
                            return r
                          }
                      } )                      
                      .map((posts) => (
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
                              <Link to={`/customer/event-display/${posts._id}`}>
                              <Button color="primary" size="sm">
                        View Event
                      </Button>
                              </Link>

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

export default TopEvents;
