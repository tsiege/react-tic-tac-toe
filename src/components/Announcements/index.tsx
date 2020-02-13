import React from 'react'
import './style.css'
import { pickRandomElement } from '../../utils/helpers'
import { COMPUTER } from '../../utils/types'

const WON_TEXT = [
  `You get a gold star! 🌟`,
  `You're like the John Henry of Tic Tac Toe`,
  `Phew, the human race is safe \n for now...`,
  `You're safe from automation`,
  `Your mom is gonna be so proud!`
]

const TIED_TEXT = [
  `No one won, but life isn't about winning.\n It's about the friends we made along the way`,
  `Tied for first! But also last...`,
  `Good game, now shake hands`,
  `No dice. Have you thought about cheating?`,
  `You tried! A for effort`
]

const LOST_TEXT = [
  `The human race is boned`,
  `This is how Skynet began`,
  `At this rate you're only gonna be useful in the skeleton war`,
  `Still think your Roomba is your friend?`,
  `Let's hope the 3 laws work`,
  `At least this isn't your real job`,
  `Wanna join the neo ludites yet?`
]

interface AnnouncementsProps {
  isGameOver: boolean
  winner?: 'O' | 'X'
}

export default class Announcements extends React.Component<AnnouncementsProps> {
  renderAnnouncement(text: string, textArr: string[]) {
    const randomText = pickRandomElement<string>(textArr)
    return (
      <div>
        <h2>{text}</h2>
        <div>{randomText}</div>
      </div>
    )
  }

  render() {
    const { isGameOver, winner } = this.props
    let html: JSX.Element | string = ''
    if (isGameOver) {
      if (!winner) {
        html = this.renderAnnouncement('Tie Game!', TIED_TEXT)
      } else if (winner === COMPUTER) {
        html = this.renderAnnouncement('Computer Wins!', LOST_TEXT)
      } else {
        html = this.renderAnnouncement('Human Wins!', WON_TEXT)
      }
    }
    return (
      <section className='announcements'>
        <div className='wrap'>
          {html}
        </div>
      </section>
    )
  }
}
