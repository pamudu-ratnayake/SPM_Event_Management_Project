import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "variables/tokenURL";


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

import React from "react";
import axios from "axios";

import PaidListHeader from "components/Headers/PaymentHandlingHeaders/PaidListHeader";

const today = new Date();
const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const PaidList = (props) => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  const [addslist, setviewlist] = useState([]);

  useEffect(() => {
    API
      .get("/payment/userpayments")
      .then((res) => {
        setviewlist(res.data);
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
    <>
      <PaidListHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card>
          <FormGroup>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Service Provider Name </th>
                  <th scope="col">Date </th>
                  <th scope="col">Total Payement 
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {addslist.map((addslist) => (
                  <tr key={addslist._id}>
                    <td>{addslist._id}</td>
                    <td>{addslist.user_name}</td>
                    
                    <td>
                      <div className="avatar-group">
                        {addslist.payment_date}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                      {addslist.total}
                      </div>
                    </td>
                   
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
                          <Link to={`/customer/viewmypayement/${addslist._id}`}>
                            <DropdownItem>View Payment</DropdownItem>
                          </Link>
                          
                          
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

export default PaidList;
