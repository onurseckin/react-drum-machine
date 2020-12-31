import './App.scss'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import DrumPad from './DrumPad'
import { DrumPadFirstBank, DrumPadSecondBank } from './SoundBanks'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faDrum, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const musicIcon = <FontAwesomeIcon icon={faMusic} />
const DrumIcon = (key) => <FontAwesomeIcon icon={faDrum} key={key} />
const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />
const linkedinIcon = (
  <a
    href='https://www.linkedin.com/in/onurseckin'
    target='_black'
    rel='noopener noreferrer'
    className='linkedinIcon brands'
  >
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
)

const githubIcon = (
  <a href='https://github.com/OnurSeckin' target='_black' rel='noopener noreferrer' className='githubIcon brands'>
    <FontAwesomeIcon icon={faGithub} />
  </a>
)

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
        <Alert id='display-title' className='display-title' variant='success'>
          <DrumIcon key={1} /> Drum Machine <DrumIcon key={2} />
        </Alert>
        <Row>
          <Col xs={12} md={8} className='col drum-pad-bank'>
            {DrumPadRender}
          </Col>
          <Col md={1} className='col brands-container'>
            {linkedinIcon}
            {githubIcon}
          </Col>
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
              {musicIcon}
            </Alert>
            <div className='volume-container'>
              <label htmlFor='volumeSlider' style={{ color: '#004085' }}>
                {volumeIcon} {Math.round(volume * 100)}
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
