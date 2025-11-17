import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import CoursePreviewCarousel from '../components/CoursePreviewCarousel'
import PathBuilder from '../components/PathBuilder'

const AuthoringTools = () => {
  const milestones = [
    'Story map generator outlines encounters and assessments.',
    'Dynamic difficulty scales timers, hints, and quest branching.',
    'Asset dropbox keeps characters, sound cues, and badges organized.',
  ]

  return (
    <>
      <HeroSection
        variant="secondary"
        accent="Design workbench"
        title="Stack authoring tools that feel like a game level editor."
        subtitle="Mix quest templates, rules, and rewards to build your ideal experience."
        description="Switch between preview modes, invite collaborators, and publish to learners in one flow. Our responsive canvas shows how every tweak affects the final interaction."
        primaryAction={{ label: 'Open Builder', onClick: () => window.alert('Launching builder...') }}
        secondaryAction={{ label: 'Share Template', onClick: () => window.alert('Template shared!') }}
        stats={[
          { label: 'Collab cursors', value: '5 live' },
          { label: 'Template starters', value: '42' },
          { label: 'Automation rules', value: '16' },
        ]}
      />
      <section className="py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <PathBuilder />
            </Col>
            <Col lg={7}>
              <Card className="insight-card h-100">
                <Card.Body>
                  <Card.Title>Workflow Milestones</Card.Title>
                  <Card.Text>
                    Every action in the builder is previewed so you know what your learners will feel.
                  </Card.Text>
                  <ListGroup variant="flush">
                    {milestones.map((item) => (
                      <ListGroup.Item key={item}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-surface">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="insight-card h-100">
                <Card.Body>
                  <Card.Title>Version snapshots</Card.Title>
                  <Card.Text>
                    Rewind experiments instantly. We log every change and let you branch prototypes so
                    you can compare difficulty curves.
                  </Card.Text>
                  <p className="text-muted mb-0">
                    Attach your favorite snapshot to share ready-made course demos with peers.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <CoursePreviewCarousel />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AuthoringTools
