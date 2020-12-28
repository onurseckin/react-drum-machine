import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const DrumPad = (props) => {
  const { id, keyTrigger, keyCode, audioSource, power } = props
  let buttonStyle = {
    width: '33%',
    height: '33%',
    textAlign: 'center',
    fontSize: '32px',
    '&:hover': { backgroundColor: 'navy', cursor: 'pointer' },
  }
  const playSound = () => {
    if (power) {
      let sound = document.getElementById(keyTrigger)
      let button = sound.parentElement
      button.style.backgroundColor = 'navy'
      setTimeout(() => (button.style.backgroundColor = 'green'), 500)
      sound.currentTime = 0
      sound.play()
    }
  }
  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      playSound()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])
  return (
    <Button id={id} style={buttonStyle} variant='success' active className='drum-pad' onClick={playSound}>
      {keyTrigger}
      <audio id={keyTrigger} className='clip' src={audioSource}></audio>
    </Button>
  )
}

export default DrumPad
