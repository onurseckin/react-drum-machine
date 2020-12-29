import './App.scss'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import DrumPad from './DrumPad'
import { DrumPadFirstBank, DrumPadSecondBank } from './SoundBanks'
import { useState } from 'react'

function App() {
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1.0)
  const [bank, setBank] = useState(true)
  const [DrumPadBank, setDrumPadBank] = useState(DrumPadSecondBank)
  const DrumPadRender = DrumPadBank.map((drum) => (
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
  const handlePower = (event) => {
    setPower(!power)
  }
  const handleVolume = (event) => {
    setVolume(event.target.value / 100)
  }
  const handleBank = (event) => {
    setBank(!bank)
    bank ? setDrumPadBank(DrumPadFirstBank) : setDrumPadBank(DrumPadSecondBank)
  }
  return (
    <Container id='drum-machine' fluid>
      <Container id='display' className='display'>
        <Row>
          <Col xs={12} md={8} className='col drum-pad-bank'>
            {DrumPadRender}
          </Col>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={3} className='col controls'>
            <Form.Check
              style={{ fontSize: 24, textAlign: 'center', lineHeight: 1, color: '#004085' }}
              type='switch'
              id='power'
              className='switch'
              label='Power'
              checked={power}
              onChange={handlePower}
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
            <Form.Check
              style={{ fontSize: 24, textAlign: 'center', lineHeight: 1, color: '#004085' }}
              type='switch'
              id='bank-switch'
              className='switch'
              label='Bank'
              checked={bank}
              onChange={handleBank}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
