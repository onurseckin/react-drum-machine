import './App.scss'
import { Container, Row, Col } from 'react-bootstrap'
import DrumPad from './DrumPad'
import { DrumPadData } from './Util'
import { useState } from 'react'

function App() {
  const [power, setPower] = useState(true)
  const DrumPadBank = DrumPadData.map((drum) => (
    <DrumPad id={drum.id} keyTrigger={drum.keyTrigger} keyCode={drum.keyCode} audioSource={drum.url} power={power} />
  ))
  return (
    <Container id='drum-machine' fluid>
      <Container id='display' className='display'>
        <Row>
          <Col xs={12} md={4} className='col'>
            Controls Container
          </Col>
          <Col xs={12} md={8} className='col drum-pad-bank'>
            {DrumPadBank}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
