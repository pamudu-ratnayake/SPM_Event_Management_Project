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
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const AdvertisementInformation = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Advertisement Information</h2>
                  </Col>
                  <Col className="text-right" xs="4">
                   </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Service Provider Name : </label>
                        <Input
                          id="Service_Provider_Name "
                          placeholder="Enter Your Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Provider ID : </label>
                        <Input
                          id="Service_Provider_ID"
                          disabled
                          placeholder="Enter your ID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number : </label>
                        <Input
                          id="Contact_Number_SP"
                          placeholder="Enter Contact Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Customer Email : </label>
                        <Input
                          id="Email_SP"
                          placeholder="Enter Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Type : </label>
                        <Input id="Service_Type" type="select">
                          <option>Choose...</option>
                          <option>Photographer</option>
                          <option>Decorater</option>
                          <option>Cake Designer</option>
                          <option>Event Planner</option>
                          <option>Sound Provider</option>
                          <option>florist</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Advertisement Available Duration :</label>
                        <Input id="Advertisement_Duration" type="select">
                          <option>Choose...</option>
                          <option>1 Day</option>
                          <option>3 Day</option>
                          <option>5 Day</option>
                          <option>10 Day</option>
                          <option>15 Day</option>
                          <option>20 Day</option>
                          <option>1 month</option>
                          <option>2 month</option>
                          <option>3 month</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label>Advertisement Description :</label>
                      <Input
                        id="Advertisement_Des"
                        placeholder="Enter your Advertisement Description here ...................."
                        rows="6"
                        type="textarea"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col md="12">
                      <label>Upload Advertisement Picture :</label>
                      <Input
                        id="Advertisement_Pic"
                        placeholder="Enter your Advertisement Picture here ..................."
                        rows="6"
                        type="textarea"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col ml="12" >
                      <label className="mb-2 mt-3">Payment Type :</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="custom-control custom-radio mb-3 ml-5">
                        <input
                          className="custom-control-input"
                          id="customRadio5"
                          name="custom-radio-2"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio5"
                        >Card Payment
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          defaultChecked
                          id="customRadio6"
                          name="custom-radio-2"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio6"
                        >
                          Online Transfering
                        </label>
                      </div>
                    </Col>
                  </Row>

                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Cancle
                      </Button>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdvertisementInformation;
