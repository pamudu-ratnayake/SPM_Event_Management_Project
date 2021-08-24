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
          <Card className="bg">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h2 className="mb-0">Sponsors</h2>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                {posts.map((posts) => (
                  <Col key={posts._id} xl="3">
                    <Card className="card-stats mb-4 mb-lg-3 bg-secondary">
                      <CardImg
                        alt="..."
                        src={require("../../assets/img/logo/logo.png").default}
                        top
                      />
                      <CardBody>
                        <div className="col">
                          <CardTitle
                            className="h2 font-weight-bold text-default mb-1"
                            style={{ fontSize: "1.2rem" }}
                          >
                            {posts.companyName}
                          </CardTitle>
                          <CardText className="text-success mr-2 mb-0">
                            <small>{posts.sponsorType}</small>
                          </CardText>
                          <CardText
                            className="font-weight text-default mr-2 mb-0"
                            style={{ fontSize: "0.8rem" }}
                          >
                            <strong>{posts.sponsorEmail}</strong>
                          </CardText>
                          <CardText
                            className="font-weight text-default mr-2 mb-0"
                            style={{ fontSize: "0.9rem" }}
                          >
                            <strong>{posts.SponsorPhoneNo}</strong>
                          </CardText>
                          <CardText
                            className="font-weight text-default mr-2 mb-0"
                            style={{ fontSize: "0.8rem" }}
                          >
                            <strong>{posts.sponsorAddress}</strong>
                          </CardText>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Sponsorship_Request;
