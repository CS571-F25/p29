import { Container, Row, Col, Card } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import FeatureHighlights from '../components/FeatureHighlights'
import CoursePreviewCarousel from '../components/CoursePreviewCarousel'
import StreakTracker from '../components/StreakTracker'
import RewardsShowcase from '../components/RewardsShowcase'

const homeFeatures = [
  {
    icon: '🎯',
    title: 'Intentional Learning Paths',
    description: 'Blend skill trees, branching choices, and instant feedback with a few clicks.',
  },
  {
    icon: '🧠',
    title: 'Smart Prompts',
    description: 'Prompt packs help you storyboard levels and pull supporting assets automatically.',
  },
  {
    icon: '⚡',
    title: 'Live Playtesting',
    description: 'Trigger simulations to see how learners experience your quests in real time.',
  },
]

const rewardBadges = [
  {
    tag: 'Design Badge',
    title: 'Flow Sculptor',
    description: 'Awarded when an instructor ships a multi-path course that keeps streaks above 80%.',
    unlocks: '4 back-to-back published quests',
  },
  {
    tag: 'Learner Badge',
    title: 'Consistency Spark',
    description: 'Automatically drops when learners maintain week-long activity across modules.',
    unlocks: '7-day streak',
  },
  {
    tag: 'Community Perk',
    title: 'Co-Op Lab Access',
    description: 'Grants extra collaborative templates for teams co-authoring a storyline.',
    unlocks: '3 shared quests',
  },
]

const Home = () => {
  return (
    <>
      <HeroSection
        accent="Gamified authoring platform"
        title="Design playful courses without losing instructional rigor."
        subtitle="QuestForge lets educators craft interactive learning experiences with zero-code building blocks."
        description="Assemble modular quests, visualize streaks, and test your stories in minutes. Publish what you create to wow your learners the same day."
        primaryAction={{ label: 'Start Authoring', onClick: () => window.alert('Authoring ready!') }}
        secondaryAction={{ label: 'Join Demo Course', onClick: () => window.alert('Demo unlocked!') }}
        stats={[
          { label: 'Average streak lift', value: '+42%' },
          { label: 'Ready-to-use quest frames', value: '28' },
          { label: 'Playtest recordings', value: '12' },
        ]}
      />
      <FeatureHighlights features={homeFeatures} />
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <CoursePreviewCarousel />
            </Col>
            <Col lg={6}>
              <Card className="insight-card h-100">
                <Card.Body>
                  <Card.Title>Animated Course Preview</Card.Title>
                  <Card.Text>
                    Toggle between course blueprints to see how different reward loops motivate
                    learners. The preview updates hero banners, streak trackers, and celebration
                    copy instantly so you can keep iterating faster.
                  </Card.Text>
                  <p className="text-muted mb-0">
                    Choose different layouts to observe how difficulty, completion, and rewards
                    respond before pushing updates.
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
            <Col lg={6}>
              <StreakTracker />
            </Col>
            <Col lg={6}>
              <Card className="insight-card h-100">
                <Card.Body>
                  <Card.Title>Practice streak simulator</Card.Title>
                  <Card.Text>
                    Preview how streak targets change the pacing of your course. Adjust the slider to
                    rebalance the difficulty window and keep learners motivated with story tiles.
                  </Card.Text>
                  <p className="text-muted mb-0">
                    Each log updates the streak data instantly so you can demo the behavior to your
                    stakeholders.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <RewardsShowcase rewards={rewardBadges} />
    </>
  )
}

export default Home
