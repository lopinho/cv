import { Col, Container, Row, ListGroup, ListGroupItem, List } from "reactstrap";

const About = (props) => {
  return (
      <div className="bg-white py-5">
          <Container>
              <section id="about">
                  <Row>
                      <Col md="4" className="text-center">
                          <div className="h-100 d-flex flex-column justify-content-center">
                              <h2 className="heading">About me</h2>
                          </div>
                      </Col>
                      <Col md="8" className="fw-lighter">
                          <p>
                              I am a passionate software developer and eternal learner with more than 9 years in the field, eager for new challenges.<br />
                          </p>
                          Knowledge on the following technologies:<br />
                          <List type="unstyled" className="py-1 ps-3">
                              <li><span className="fw-normal">Programming Languages:</span> Python, JS.</li>
                              <li><span className="fw-normal">Frameworks:</span> Django, ExpressJS, React and Redux.</li>
                          </List>
                          I love to develop high quality and deliver state of the art software into the market.
                          I strongly believe in test driven development (TDD), continuous integration and deployment.
                      </Col>
                  </Row>
              </section>
          </Container>
      </div>
  )
}
export default About;