import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  FormGroup,
  CardText,
  CardTitle,
  Table,
  CardImg,
  Col,
  Row,
  CardBody,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Modal,
  Button,
  Container,
  Input,
  CardHeader,
} from "reactstrap";
// import ReactDatetime from "react-datetime";
// core components
import MyAdvertisementListHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/MyAdvertisementListHeader";
import React from "react";
import axios from "axios";
import API from "variables/tokenURL";

const MyAdvertisementList = (props) => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }
  const [searchStr, setSearch] = useState("");

  const [addslist, setviewlist] = useState([]);

  useEffect(() => {
    API.get("/advertisement/provider-adds")
      .then((res) => {
        setviewlist(res.data);
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRequest = (_id) => {
    console.log("ID eka: ", _id);
    axios
      .delete(`http://localhost:8080/advertisement/deleteAdvertisement/${_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <MyAdvertisementListHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card>
          <CardHeader>
            <Col xs="3">
              
                <Row>
                <div style={{paddingLeft:'34rem'}}>
                <Input
                  type="text"
                  placeholder="Search..."
                  style={{
                    borderWidth: "2.5px",
                    width: "15rem",
                    height: "2rem",
                    textAlign: "left",
                    borderRadius: "15px",
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
               </div>
                </Row>
              
            </Col>

          </CardHeader>
          <FormGroup>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Advertisement ID</th>
                  <th scope="col">Service Provider Name</th>
                  <th scope="col">Advertisement Duration </th>
                  <th scope="col">Service Type </th>

                  {/* <th scope="col">Advertisement Status 
                  </th> */}
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {addslist
                  .filter((r) => {
                    if (searchStr === "") {
                      return r;
                    } else if (
                      r._id.toLowerCase().includes(searchStr.toLowerCase())
                    ) {
                      return r;
                    }
                  })
                  .map((addslist) => (
                    <tr key={addslist._id}>
                      <td>{addslist._id}</td>
                      <td>{addslist.service_Provider_Name}</td>
                      <td>
                        <i className="bg-warning" />
                        {addslist.advertisement_Duration}
                      </td>
                      <td>
                        <div className="avatar-group">
                          {addslist.service_Type}
                        </div>
                      </td>
                      {/* <td>
                      <div className="avatar-group">
                        <Input>
                        <option>Set Status</option>
                          <option>Displayed </option>
                          <option>Now Showing</option>
                          <option>Requested</option> 
                        </Input>
                      </div>
                    </td> */}
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={defaultModal}
                        toggle={() => toggleModal("defaultModal")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Confirm Your Deletion
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => toggleModal("defaultModal")}
                          >
                            <span aria-hidden={true}> </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <Card
                            className="bg-secondary shadow"
                            style={{ width: "28rem" }}
                          >
                            <Card style={{ width: "28rem" }}>
                              <CardBody>
                                <CardText>
                                  Do you want to delete this request ?
                                </CardText>
                              </CardBody>
                            </Card>
                          </Card>
                        </div>
                        <div className="modal-footer">
                          <Button
                            color="primary"
                            type="button"
                            onClick={deleteRequest.bind(
                              props.this,
                              addslist._id
                            )}
                            //  onClick={() => toggleModal("defaultModal")}
                          >
                            Delete Request
                          </Button>
                          <Button
                            color="primary"
                            type="button"
                            onClick={() => toggleModal("defaultModal")}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            role="button"
                            size="sm"
                            color=""
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <Link
                              to={`/serviceprovider/ViewAdvertisement/${addslist._id}`}
                            >
                              <DropdownItem>View Request</DropdownItem>
                            </Link>
                            <Link
                              to={`/serviceprovider/updateadvertisement/${addslist._id}`}
                            >
                              <DropdownItem>Update Request</DropdownItem>
                            </Link>
                            <DropdownItem
                              onClick={() => toggleModal("defaultModal")}
                            >
                              Delete Request
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </FormGroup>
        </Card>
      </Container>
    </>
  );
};

export default MyAdvertisementList;
