import { useMemo, useState } from 'react'
import { Card, Button, ProgressBar, Badge } from 'react-bootstrap'

const courses = [
  {
    id: 1,
    title: 'Branching Story Quest',
    quests: 5,
    difficulty: 'Adaptive',
    reward: 'Narrative Architect Badge',
    completion: 48,
    summary: 'Learners choose avatars and unlock scenes as they master checkpoints.',
  },
  {
    id: 2,
    title: 'Speedrun Practice Path',
    quests: 7,
    difficulty: 'Time-boxed',
    reward: 'Momentum Sparks',
    completion: 62,
    summary:
      'Micro challenges bundle hints, timers, and live leaderboard nudges inside each quest.',
  },
  {
    id: 3,
    title: 'Sandbox Collaboration',
    quests: 4,
    difficulty: 'Cooperative',
    reward: 'Co-Op Legend Medal',
    completion: 33,
    summary: 'Teams remix puzzles with shared assets and vote on the cleanest final build.',
  },
]

const CoursePreviewCarousel = () => {
  const [index, setIndex] = useState(0)
  const currentCourse = useMemo(() => courses[index], [index])

  const goTo = (direction) => {
    setIndex((prev) => {
      if (direction === 'next') {
        return prev === courses.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? courses.length - 1 : prev - 1
    })
  }

  return (
    <Card className="course-preview">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <p className="text-uppercase text-muted small mb-1">Course Preview</p>
            <Card.Title>{currentCourse.title}</Card.Title>
          </div>
          <Badge bg="warning" text="dark">
            {currentCourse.difficulty}
          </Badge>
        </div>
        <Card.Text>{currentCourse.summary}</Card.Text>
        <div className="d-flex gap-4 flex-wrap mb-3">
          <div>
            <small className="text-muted text-uppercase">Quests</small>
            <p className="fs-4 fw-semibold mb-0">{currentCourse.quests}</p>
          </div>
          <div>
            <small className="text-muted text-uppercase">Reward</small>
            <p className="fw-semibold mb-0">{currentCourse.reward}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="d-flex justify-content-between mb-1">
            <small className="text-muted text-uppercase">Completion Pulse</small>
            <span className="fw-bold">{currentCourse.completion}%</span>
          </div>
          <ProgressBar now={currentCourse.completion} variant="warning" />
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-2">
          <Button variant="outline-secondary" onClick={() => goTo('prev')}>
            Previous
          </Button>
          <Button variant="warning" onClick={() => goTo('next')}>
            Next Preview
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CoursePreviewCarousel
