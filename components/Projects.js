import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';


const Projects = (props) => {
  return (
      <div className="bg-white py-5">
          <Container>
              <section id="projects">
                  <div className="d-flex justify-content-center"><h4 className="heading">Projects</h4></div>
                  <Card className="shadow p-2">
                      <Row>
                          <Col md="4" className="d-flex flex-column justify-content-center">
                              <CardImg top width="300" src="../images/brbid_site.png" alt="Card image cap" className="img-fluid rounded-start" />
                          </Col>
                          <Col md="8">
                              <CardBody className="">
                                  <CardTitle className="h4 fw-lighter text-center mb-3">BRBid.com</CardTitle>
                                  <CardText className="w-75 fw-lighter lh-sm mx-auto" style={{ "font-size": "0.9em" }}>
                                      Auction site that has sold more than 200,000 vehicles on its marketplace with more than 6 million monthly visits.
                                      Considered in 2017 by most customers one of the best real-time auction sites in Brazil.
                                      Made with Django and nodejs using realtime (socket.io) for backend and Angular/React for frontend. I was responsible for ensuring scalability and assembling the entire system infrastructure on AWS,
                                      I worked as a fullstack and for a long time I was the only developer on the project
                                  </CardText>
                              </CardBody>
                          </Col>
                      </Row>
                  </Card>
              </section>
          </Container>
      </div>
  )
}
export default Projects;