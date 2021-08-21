// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
// core components
import UserHeaderSponsors from "components/Headers/UserHeaderSponsors.js";
import axios from "axios";
import { useState, useEffect } from "react";

const Sponsorship_Request = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/sponsor/getSponsors")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <UserHeaderSponsors />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Col className="order-xl-1" xl="12">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h2 className="mb-0">Sponsors</h2>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div style={{ width: "18rem" }}>
                <Col xl="12">
                  {posts.map((posts) => (
                    <div key={posts._id}>
                      <Card className="card-stats mb-10 mb-lg-0">
                        <CardImg
                          alt="..."
                          src={
                            require("../../assets/img/logo/logo.png").default
                          }
                          top
                        />
                        <CardBody>
                          
                            <div className="col">
                              <CardTitle
                                className="h2 font-weight-bold mb-0"
                                style={{ fontSize: "1rem" }}
                              >
                                {posts.companyName}
                              </CardTitle>
                              <CardText className="text-success mr-2">
                                {/* <i className="fa fa-arrow-up" /> */}
                                {posts.sponsorType}
                              </CardText>
                              <CardText className="text-muted mb-0">
                                {posts.sponsorEmail}
                              </CardText>
                          
                          {/* <p className="mt-3 mb-0 text-muted text-sm"> */}
                          <CardText className="text-muted mb-0">
                            {/* <i className="fa fa-arrow-up" /> */}
                            {posts.SponsorPhoneNo}
                          </CardText>
                          </div>
                          {/* </p> */}
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </Col>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Sponsorship_Request;
