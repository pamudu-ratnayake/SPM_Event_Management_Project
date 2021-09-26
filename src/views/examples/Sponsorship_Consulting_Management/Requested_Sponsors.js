// SponsorList

import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
  Col,
  Modal,
  Button,
} from "reactstrap";
// core components
import UserHeaderSponsorsList from "components/Headers/UserHeaderSponsorsList.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Requested_Sponsors = (props) => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <UserHeaderSponsorsList />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Col className="border-0" xl="9">
                  <h3 className="mb-0">Sponsor List</h3>
                </Col>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Sponsor</th>
                    <th scope="col">Requested Date</th>
                    <th scope="col">Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      {/* <Media> */}
                      <span className="mb-0 text-sm">mmmmmmmm</span>
                      {/* </Media> */}
                    </td>
                    <td scope="row">
                      <span className="mb-0 text-sm">mmmmmmmm</span>
                    </td>
                    <td scope="row">
                      <span className="mb-0 text-sm">mmmmmmmm</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Requested_Sponsors;
