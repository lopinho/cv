import { Container, Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

const Experience = (props) => {
  return (
      <div className="bg-light py-5">
              <section id="experience">
                  <div className="d-flex justify-content-center">
                      <h2 className="heading">Experience</h2>
                  </div>

          <Container className="w-75 mx-auto">
                  <h6 className="ps-1">September 2011 – April 2021</h6>
                  <Card className="shadow pt-2">
                      <CardBody>
                          <CardTitle tag="h4" className="fw-lighter">BRBid.com</CardTitle>
                          <CardSubtitle tag="h6" className="fw-lighter mb-3">Tech lead</CardSubtitle>
                          <CardText className=" fw-lighter lh-sm">
                              Auction site that has sold more than 200,000 vehicles on its marketplace with more than 6 million monthly visits.
                              Considered in 2017 by most customers one of the best real-time auction sites in Brazil.
                              Made with Django and nodejs using realtime (socket.io) for backend and Angular/React for frontend. I was responsible for ensuring scalability and assembling the entire system infrastructure on AWS,
                              I worked as a fullstack and for a long time I was the only developer on the project
                          </CardText>
                      </CardBody>
                  </Card>
          </Container>
              </section>
      </div>
  )
}
export default Experience;