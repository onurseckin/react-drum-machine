import { useEffect } from 'react'

const DrumPad = (props) => {
  const { id, keyTrigger, keyCode, audioSource, power, volume } = props

  const playSound = () => {
    if (power) {
      let sound = document.getElementById(keyTrigger)
      let label = document.getElementById('label')
      let button = sound.parentElement
      label.innerText = id
      button.style.backgroundColor = 'navy'
      button.style.color = 'white'
      setTimeout(() => {
        button.style.backgroundColor = '#d1ecf1'
        button.style.color = 'black'
      }, 500)
      sound.currentTime = 0
      sound.volume = volume
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
  }, [power, volume]) //eslint-disable-line
  return (
    <button id={id} className='drum-pad' onClick={playSound}>
      {keyTrigger}
      <audio id={keyTrigger} className='clip' src={audioSource}></audio>
    </button>
  )
}

export default DrumPad
