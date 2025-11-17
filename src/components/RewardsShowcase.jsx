import { Card, Row, Col, Container, Badge } from 'react-bootstrap'

const RewardsShowcase = ({ rewards = [] }) => {
  return (
    <section className="py-5">
      <Container>
        <div className="section-heading text-center mb-4">
          <p className="text-uppercase text-muted small mb-1">Reward Loop</p>
          <h2>Surface the wins that keep authors and learners moving</h2>
        </div>
        <Row className="g-4">
          {rewards.map((reward) => (
            <Col md={4} key={reward.title}>
              <Card className="reward-card h-100">
                <Card.Body>
                  <Badge bg="dark" className="mb-2">
                    {reward.tag}
                  </Badge>
                  <Card.Title>{reward.title}</Card.Title>
                  <Card.Text>{reward.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="fw-semibold text-muted">
                  Unlocks at {reward.unlocks}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default RewardsShowcase
