import React from 'react'
import { ReactSVG } from 'react-svg'
import { Player, COMPUTER, HUMAN } from '../../utils/types'
import './style.css'

type OptionsProps = {
  hasGameStarted: boolean
  resetGame: () => any
  startGame: (choice: Player) => any
}

export default class Options extends React.Component<OptionsProps> {
  render() {
    const { hasGameStarted, resetGame, startGame } = this.props
    if (hasGameStarted) {
      return (
        <div className="game-choices twelve columns">
          <button onClick={resetGame}>Start Over</button>
        </div>
      )
    } else {
      return (
        <div className="game-choices twelve columns">
          <span className="twelve columns">Who goes first?</span>
          <div className="six columns" onClick={() => startGame(COMPUTER)}>
            <ReactSVG src='robot.svg' className='computer'/>
          </div>
          <div className="six columns" onClick={() => startGame(HUMAN)}>
            <ReactSVG src='human.svg' className='human'/>
          </div>
        </div>
      )
    }
  }
}
