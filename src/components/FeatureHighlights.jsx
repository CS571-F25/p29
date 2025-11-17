import { Container, Row, Col, Card } from 'react-bootstrap'

const FeatureHighlights = ({ features = [] }) => {
  return (
    <section className="py-5 bg-surface">
      <Container>
        <div className="section-heading text-center mb-4">
          <p className="text-uppercase text-muted small mb-1">Platform Pillars</p>
          <h2 className="fw-bold">Author faster with playful structure</h2>
        </div>
        <Row className="g-4">
          {features.map((feature) => (
            <Col md={4} key={feature.title}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FeatureHighlights
