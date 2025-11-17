import { Container, Row, Col, Card } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import StreakTracker from '../components/StreakTracker'
import RewardsShowcase from '../components/RewardsShowcase'

const engagementRewards = [
  {
    tag: 'Momentum',
    title: 'Streak Beacon',
    description: 'Projection sent to every learner when their team streak keeps momentum for 14 days.',
    unlocks: 'Team streak of 14 days',
  },
  {
    tag: 'Challenge',
    title: 'Boss Battle Invite',
    description: 'Signals a timed co-op assessment with custom hints unlocked by feedback tokens.',
    unlocks: 'Collect 20 feedback tokens',
  },
  {
    tag: 'Story',
    title: 'Lore Drop',
    description: 'Extra cut-scene script unlocked for authors who keep completion above 70%.',
    unlocks: '70% completion rate',
  },
]

const insights = [
  {
    title: 'Reward pacing monitor',
    copy: 'Spread badges, tokens, and lore reveals across your course arc to keep the dopamine drip balanced.',
  },
  {
    title: 'Progress cohorts',
    copy: 'Show authors how different learner cohorts move through modules and highlight when to trigger nudges.',
  },
  {
    title: 'Demo-ready analytics',
    copy: 'One click exports charts and micro-interaction recordings to share with leadership or prospective clients.',
  },
]

const EngagementLab = () => {
  return (
    <>
      <HeroSection
        variant="accent"
        accent="Engagement lab"
        title="Simulate inspiration loops before launching to learners."
        subtitle="Understand streaks, feedback, and rewards through playful analytics."
        description="Press play on streak trackers, see where learners pause, and adapt the incentive mix that fuels their curiosity."
        primaryAction={{ label: 'Monitor Activity', onClick: () => window.alert('Analytics live!') }}
        secondaryAction={{ label: 'Export Demo', onClick: () => window.alert('Export queued!') }}
        stats={[
          { label: 'Active streaks', value: '1,248' },
          { label: 'Nudge templates', value: '35' },
          { label: 'Reward recipes', value: '14' },
        ]}
      />
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <StreakTracker />
            </Col>
            <Col lg={6}>
              <Card className="insight-card h-100">
                <Card.Body>
                  <Card.Title>Progress tracker simulation</Card.Title>
                  <Card.Text>
                    Demo the exact wording learners see when streaks are celebrated or in danger.
                  </Card.Text>
                  <p className="text-muted mb-0">
                    Adjust the slider to rehearse how quickly your rewards show up.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-surface">
        <Container>
          <Row className="g-4">
            {insights.map((insight) => (
              <Col md={4} key={insight.title}>
                <Card className="insight-card h-100">
                  <Card.Body>
                    <Card.Title>{insight.title}</Card.Title>
                    <Card.Text>{insight.copy}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <RewardsShowcase rewards={engagementRewards} />
    </>
  )
}

export default EngagementLab
