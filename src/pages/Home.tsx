import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import * as Styles from '../styles'

import Hero from '../organisms/Hero'

import { incrementIfOdd, increment, decrement } from '../redux/actions/counter'

const S: Styles.Component = Styles
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  min-height: 100vh;
  width: 100vw;
`

interface PropTypes {
  counter: number
  incrementIfOdd: () => void
  increment: () => void
  decrement: () => void
}

class Home extends Component<PropTypes> {
  render() {
    // const { } = this.props
    return (
      <S.Container>
        <Hero />
      </S.Container>
    )
  }
}

interface StateType {
  counter: number
  [key: string]: any
}

const mapStateToProps = (state: StateType) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = {
  incrementIfOdd,
  increment,
  decrement,
}
//TODO: SWITCH TO HOOKS API AND FUNCTIONAL COMPONENTS

export default connect(mapStateToProps, mapDispatchToProps)(Home)