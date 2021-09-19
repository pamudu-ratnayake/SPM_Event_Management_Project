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
  CardBody,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Modal,
  Button,
  Container,
  Input,
} from "reactstrap";
// import ReactDatetime from "react-datetime";
// core components
import AdvertisementListHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/AdvertisementListHeader";
import React from "react";
import axios from "axios";

const AdvertisementList = (props) => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  const [addslist, setviewlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/advertisement/list")
      .then((res) => {
        setviewlist(res.data);
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRequest = (_id) => {
    console.log('ID eka: ', _id)
    axios
      .delete(
        `http://localhost:8080/advertisement/deleteAdvertisement/${_id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AdvertisementListHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card>
          <FormGroup>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Service Provider ID</th>
                  <th scope="col">Service Provider Name </th>
                  <th scope="col">Advertisement Duration </th>
                  <th scope="col">Service Type </th>
                  {/* <th scope="col">Advertisement Status 
                  </th> */}
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {addslist.map((addslist) => (
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
                    onClick={deleteRequest.bind(props.this, addslist._id)}
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
                          <Link to={`/admin/viewadvertisement/${addslist._id}`}>
                            <DropdownItem>View Request</DropdownItem>
                          </Link>
                          <Link
                            to={`/admin/updateadvertisement/${addslist._id}`}
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

export default AdvertisementList;
