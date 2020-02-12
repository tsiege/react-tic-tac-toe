import React from 'react'
import { ReactSVG } from 'react-svg'
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
        <div className="game-choices twelve columns">
          <span className="twelve columns">Which way do you wanna do this?</span>
          <p className="six columns" onClick={() => this.pickYourPoison(true)}>
            <span role="img" aria-label="Fire">🔥</span>The Hard Way??<span role="img" aria-label="Fire">🔥</span>
          </p>
          <p className="six columns" onClick={() => this.pickYourPoison(false)}>
            <span role="img" aria-label="Relieved Face">😌</span>The Easy Way <span role="img" aria-label="Relieved Face">😌</span>
          </p>
        </div>
      )
    } else {
      return (
        <div className="game-choices twelve columns">
          <span className="twelve columns">Who goes first?</span>
          <div className="six columns" onClick={() => this.callStart(COMPUTER)}>
            <ReactSVG src='robot.svg' className='computer'/>
          </div>
          <div className="six columns" onClick={() => this.callStart(HUMAN)}>
            <ReactSVG src='human.svg' className='human'/>
          </div>
        </div>
      )
    }
  }

  render() {
    const { hasGameStarted, resetGame } = this.props
    if (hasGameStarted) {
      return (
        <div className="game-choices twelve columns">
          <button onClick={resetGame}>Start Over</button>
        </div>
      )
    } else {
      return this.renderPrePlayOptions()
    }
  }
}
