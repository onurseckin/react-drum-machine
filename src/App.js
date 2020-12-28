import './App.scss'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import DrumPad from './DrumPad'
import { DrumPadData } from './Util'
import { useState } from 'react'

function App() {
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1.0)
  const DrumPadBank = DrumPadData.map((drum) => (
    <Col xs={4} md={4} lg={4}>
      <DrumPad
        key={drum.id}
        id={drum.id}
        keyTrigger={drum.keyTrigger}
        keyCode={drum.keyCode}
        audioSource={drum.url}
        power={power}
        volume={volume}
      />
    </Col>
  ))
  const handleSwitch = (event) => {
    setPower(!power)
  }
  const handleVolume = (event) => {
    setVolume(event.target.value / 100)
  }
  return (
    <Container id='drum-machine' fluid>
      <Container id='display' className='display'>
        <Row>
          <Col xs={12} md={8} className='col drum-pad-bank'>
            {DrumPadBank}
          </Col>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={3} className='col controls'>
            <Form.Check
              style={{ fontSize: 24, textAlign: 'center', lineHeight: 1, color: '#004085' }}
              type='switch'
              id='power'
              className='power'
              label='Power'
              checked={power}
              onChange={handleSwitch}
            />
            <Alert id='label' className='label' variant='warning'>
              Label
            </Alert>
            <div className='volume-container'>
              <label htmlFor='volumeSlider' style={{ color: '#004085' }}>
                Volume {Math.round(volume * 100)}
              </label>
              <input
                type='range'
                className='volume-input'
                id='volumeSlider'
                onChange={handleVolume}
                value={Math.round(volume * 100)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
