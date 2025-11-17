import { useState } from 'react'
import { Card, Badge, Button, ListGroup } from 'react-bootstrap'

const starterModules = [
  { id: 'pulse', label: 'Pulse Warm-Up', duration: '5 min' },
  { id: 'quest', label: 'Quest Builder', duration: '10 min' },
  { id: 'artifact', label: 'Artifact Review', duration: '8 min' },
  { id: 'boss', label: 'Boss Battle', duration: '12 min' },
  { id: 'celebrate', label: 'Celebration Story', duration: '6 min' },
]

const PathBuilder = () => {
  const [selectedModules, setSelectedModules] = useState(starterModules.slice(0, 3))

  const toggleModule = (module) => {
    setSelectedModules((prev) => {
      const exists = prev.find((item) => item.id === module.id)
      if (exists) {
        return prev.filter((item) => item.id !== module.id)
      }
      return [...prev, module]
    })
  }

  const randomize = () => {
    const shuffled = [...starterModules].sort(() => Math.random() - 0.5)
    setSelectedModules(shuffled.slice(0, 4))
  }

  return (
    <Card className="path-builder">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <small className="text-uppercase text-muted">Path Designer</small>
            <h4 className="mb-0">Customize your quest journey</h4>
          </div>
          <Button size="sm" variant="outline-primary" onClick={randomize}>
            Shuffle Flow
          </Button>
        </div>
        <ListGroup className="mb-3">
          {starterModules.map((module) => {
            const active = selectedModules.some((item) => item.id === module.id)
            return (
              <ListGroup.Item
                key={module.id}
                action
                active={active}
                onClick={() => toggleModule(module)}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{module.label}</span>
                <Badge bg={active ? 'light' : 'dark'} text={active ? 'dark' : 'light'}>
                  {module.duration}
                </Badge>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
        <p className="text-uppercase text-muted small mb-1">Active Flow</p>
        <div className="d-flex gap-2 flex-wrap">
          {selectedModules.map((module, index) => (
            <Badge key={module.id} bg="warning" text="dark" className="p-3">
              Stage {index + 1}: {module.label}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default PathBuilder
