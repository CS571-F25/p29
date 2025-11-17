import { useState } from 'react'
import { Card, Button, ProgressBar, Form } from 'react-bootstrap'

const StreakTracker = () => {
  const [streak, setStreak] = useState(18)
  const [goal, setGoal] = useState(30)
  const [message, setMessage] = useState(
    'Learners unlock extra story tiles when streaks reach 21 days.'
  )

  const recordPractice = () => {
    setStreak((prev) => {
      const updated = Math.min(goal, prev + 1)
      if (updated === goal) {
        setMessage('Goal reached! Boost the target to keep streak energy high.')
      } else {
        setMessage(`Only ${goal - updated} days until the next celebration badge.`)
      }
      return updated
    })
  }

  return (
    <Card className="streak-tracker">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small className="text-uppercase text-muted">Practice Streak</small>
            <h4 className="mb-0">{streak} days</h4>
          </div>
          <Button variant="warning" onClick={recordPractice}>
            Log Today&apos;s Quest
          </Button>
        </div>
        <div className="my-3">
          <ProgressBar now={(streak / goal) * 100} variant="success" />
        </div>
        <Form.Label className="text-uppercase small text-muted">
          Set a new streak target ({goal} days)
        </Form.Label>
        <Form.Range
          value={goal}
          min={21}
          max={60}
          onChange={(event) => setGoal(Number(event.target.value))}
        />
        <p className="mt-3 text-body-secondary">{message}</p>
      </Card.Body>
    </Card>
  )
}

export default StreakTracker
