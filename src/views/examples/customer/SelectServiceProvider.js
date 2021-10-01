import ReactDatetime from "react-datetime";

// reactstrap components
import { Button, Modal, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table, Label } from "reactstrap";
// core components
import SelectServiceProviderHeader from "components/Headers/Events/SelectServiceProviderHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "variables/tokenURL";

const SelectServiceProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [serviceProvider, setServiceProvider] = useState(0);

  console.log("ID is:", props.match.params._id);

  useEffect(() => {
    API.get(`/quotation/get-quotations/${props.match.params._id}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const getServiceProvider = (provider_id) => {
  //   console.log("ser id:", provider_id);
  //   API.get(`/serviceProvider/get/${provider_id}`)
  //     .then((res) => {
  //       setServiceProvider(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const acceptQuotation = (_id) => {
    const approved = { approve: true };
    console.log("check", approved);
    API.put(`/quotation/update/status/${_id}`, approved)
      .then((res) => {
        console.log(res);
        console.log(approved);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(false);
  };

  // const getServiceProvider = async (provider_id) => {
  //   console.log("ser id:", provider_id);
  //   await API.get(`/serviceProvider/get/${provider_id}`)
  //     .then((res) => {
  //       setServiceProvider(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const [exampleModal, setmodalDemo] = useState(false);

  //toggle function
  function toggleModal() {
    setmodalDemo(!exampleModal);
  }

  return (
    <>
      <SelectServiceProviderHeader />
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
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((posts) => (
                      <tr key={posts._id}>
                        <td> {posts.provider_id.user_name} </td>
                        <td> {posts.provider_id.service_type} </td>
                        <td> {posts.provider_id.email} </td>
                        <td> {posts.provider_id.mobile} </td>
                        <td>
                          {" "}
                          <Button
                            className="btn-icon btn-2"
                            size="sm"
                            color="success"
                            type="button"
                            onClick={() => {
                              acceptQuotation(posts._id);
                            }}
                          >
                            <span className="btn-inner--icon">
                              <i className="ni ni-check-bold" />
                            </span>
                          </Button>
                          <Button className="btn-icon btn-2 " size="sm" color="danger" type="button">
                            <span className="btn-inner--icon-center">
                              <i className="ni ni-atom" />
                            </span>
                          </Button>
                          <Link to={`/customer/view-quotations/${posts._id}`}>
                            <Button className="btn-icon btn-2 " size="sm" color="primary" type="button">
                              <span className="btn-inner--icon-center">
                                <i className="ni ni-glasses-2" />
                              </span>
                            </Button>
                          </Link>
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
