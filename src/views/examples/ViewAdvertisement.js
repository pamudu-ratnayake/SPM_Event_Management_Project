import  {useState , useEffect} from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,

} from "reactstrap";
import * as Yup from "yup";
// core components
import BoostAddHeader from "components/Headers/BoostAddHeader";
import axios from "axios";

const ViewAdvertisement = (props) => {
  console.log('Id is: ', props.match.params._id)
  
const [addsData,setAdd]  = useState(0);

useEffect(() => {
  axios.get(`http://localhost:8080/advertisement/get/${props.match.params._id}`)
  .then((res) =>{
   console.log(res)
   setAdd(res.data)
})
.catch((error) =>{
  console.log(error)
})

 },[]) ;
 


  return (
    <>
      <BoostAddHeader />
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
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <Card style={{ width: "61.3rem" }}>
          <CardImg
            alt="..."
            src={require("assets/img/theme/kk.jpg").default}
            top
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
        
             <CardText>Service Provider Name {addsData.service_Provider_Name}</CardText>
             <CardText>Customer Email{addsData.email_SP}</CardText>
             <CardText>Contact Number{addsData.contact_Number_SP}</CardText>
             <CardText>Service Type{addsData.service_Type}</CardText>
             <CardText>Advertisement Available Duration{addsData.advertisement_Duration}</CardText>
             <CardText>Advertisement Description{addsData.advertisement_Duration}</CardText>
             <CardText>Upload Advertisement Picture{addsData.advertisement_Des}</CardText>
             <CardText>Payment Type{addsData.advertisement_Pic}</CardText>

     
            <Button className = "ml-8 mr-8"
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Update Request
            </Button>
          </CardBody>
        </Card>               
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewAdvertisement;
