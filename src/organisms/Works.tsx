import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'
import OutlinedButton from '../atoms/OutlinedButton'
import { ReactComponent as GithubLogo } from '../assets/github.svg'
import { ReactComponent as Chevron } from '../assets/chevron.svg'
import freeps from '../assets/freeps.png'

const S: Styles.Component = Styles
S.Works = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 124px;

  color: ${(props) => props.theme.color.positive};
  text-align: center;

  a {
    color: ${(props) => props.theme.color.primary};
    transition: 250ms;

    &:hover {
      color: ${(props) => props.theme.color.positive};
    }
  }

  div.thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 32px;
    padding: 48px;
    width: 100%;
    max-width: 1215px;
    box-sizing: border-box;

    .grid-item {
      position: relative;
      padding-top: 60%;
      border-radius: 10px;
      overflow: hidden;
    }

    .thumbnail {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: ${(props) => props.theme.color.positive};
      color: ${(props) => props.theme.color.negative};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 16px;
      box-sizing: border-box;
    }

    .grid-item:hover {
      .overlay {
        opacity: 1;
      }
    }
  }
`

function Works() {
  return (
    <S.Works>
      <h1>My Recent Works</h1>
      <p>
        {"Here are a few design projects I've worked on recently. Want to see more? "}
        <a href="mailto:dylan@cortez-modell.com">Email me.</a>
      </p>
      <div className="thumbnail-grid">
        {/* Thumbnails of Works */}
        <div className="grid-item">
          <img src={freeps} alt="FreePeoples.com" className="thumbnail" />
          <div className="overlay">
            <h4>Yo</h4>
            <OutlinedButton onClick={() => window.open('www.freepeoples.com')} end transparent>
              Visit Site
              <Chevron />
            </OutlinedButton>
          </div>
        </div>
        <div className="grid-item">
          <img src={freeps} alt="Rune-Stone.com" className="thumbnail" />
          <div className="overlay">
            <h4>Yo</h4>
            <OutlinedButton onClick={() => window.open('www.rune-stone.com')} end transparent>
              Visit Site
              <Chevron />
            </OutlinedButton>
          </div>
        </div>
        <div className="grid-item">
          <img src={freeps} alt="GreenConsultants.com" className="thumbnail" />
          <div className="overlay">
            <h4>Yo</h4>
            <OutlinedButton onClick={() => window.open('www.greenconsultants.com')} end transparent>
              Visit Site
              <Chevron />
            </OutlinedButton>
          </div>
        </div>
      </div>
      {/* Link to dribbble */}
      {/* TODO: link to my profile */}
      {/* TODO: link to my behance */}
      <OutlinedButton onClick={() => window.open('www.google.com')}>
        <GithubLogo />
        See more on GitHub
      </OutlinedButton>
    </S.Works>
  )
}

export default Works
