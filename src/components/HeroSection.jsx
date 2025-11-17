import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap'

const HeroSection = ({
  title,
  subtitle,
  description,
  accent,
  primaryAction,
  secondaryAction,
  stats = [],
  variant = 'primary',
}) => {
  return (
    <section className={`hero-section hero-${variant} py-5`}>
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7}>
            {accent && (
              <Badge bg="warning" text="dark" className="mb-3 text-uppercase">
                {accent}
              </Badge>
            )}
            <h1 className="display-5 fw-semibold">{title}</h1>
            {subtitle && (
              <p className="lead text-light-emphasis">{subtitle}</p>
            )}
            <p className="hero-description">{description}</p>
            <div className="d-flex gap-3 flex-wrap mt-4">
              {primaryAction && (
                <Button
                  size="lg"
                  variant="warning"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  size="lg"
                  variant="outline-light"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </Col>
          <Col md={5}>
            <Card className="hero-card h-100">
              <Card.Body>
                <Card.Title className="text-uppercase text-muted small">
                  Pulse Monitor
                </Card.Title>
                <Card.Text className="fs-4 fw-semibold">
                  See at a glance how learners move through your quests.
                </Card.Text>
                <div className="d-grid gap-3 mt-4">
                  {stats.map((item) => (
                    <div key={item.label} className="stat-pill">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
