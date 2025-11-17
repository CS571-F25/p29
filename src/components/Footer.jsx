import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white mt-auto">
      <Container className="d-flex justify-content-between flex-wrap gap-3">
        <span>&copy; {new Date().getFullYear()} QuestForge Labs</span>
        <span className="text-white-50">
          Built with React, React Router, and React Bootstrap
        </span>
      </Container>
    </footer>
  )
}

export default Footer
