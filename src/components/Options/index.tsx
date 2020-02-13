import React from 'react'
import { Player, COMPUTER, HUMAN } from '../../utils/types'
import './style.css'

interface OptionsProps {
  isHard?: boolean
  hasGameStarted: boolean
  resetGame: () => any
  startGame: (args: { player: Player, isHard: boolean }) => any
}
interface OptionsState {
  isHard?: boolean
}

export default class Options extends React.Component<OptionsProps, OptionsState> {
  constructor(props: OptionsProps) {
    super(props)
    this.state = {
      isHard: props.isHard
    }
  }

  pickYourPoison(isHard: boolean) {
    this.setState({ isHard })
  }

  callStart(player: Player) {
    const { isHard } = this.state
    if (isHard === undefined) {
      return
    }
    this.props.startGame({ player, isHard })
    this.setState({ isHard: undefined })
  }

  renderPrePlayOptions() {
    if (this.state.isHard === undefined) {
      return (
        <div>
          <h3>Which way do you wanna do this?</h3>
          <p>
            <button className='option-button' onClick={() => this.pickYourPoison(true)}>
              <span role='img' aria-label='Fire'>🔥</span> The Hard Way?? <span role='img' aria-label='Fire'>🔥</span>
            </button>
          </p>
          <p>
            <button className='option-button' onClick={() => this.pickYourPoison(false)}>
              <span role='img' aria-label='Relieved Face'>😌</span> The Easy Way <span role='img' aria-label='Relieved Face'>😌</span>
            </button>
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Who goes first?</h3>
            <p>
              <button className='option-button' onClick={() => this.callStart(COMPUTER)}>
                <span role='img' aria-label='Robot'>🤖</span> Computer <span role='img' aria-label='Robot'>🤖</span>
              </button>
            </p>
            <p>
              <button className='option-button' onClick={() => this.callStart(HUMAN)}>
                <span role='img' aria-label='Bust in Silhouette'>👤</span> YOU! <span role='img' aria-label='Bust in Silhouette'>👤</span>
              </button>
            </p>
        </div>
      )
    }
  }

  renderResetButton() {
    const { resetGame } = this.props
    return (
      <div className='start-over'>
        <button className='option-button' onClick={resetGame}>Start Over</button>
      </div>
    )
  }

  render() {
    const { hasGameStarted } = this.props
    const innerHtml = hasGameStarted ? this.renderResetButton() : this.renderPrePlayOptions()
    return (
      <section className='options'>
        {innerHtml}
      </section>
    )
  }
}
