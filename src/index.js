import React, { Component } from 'react';
import './config/ReactotronConfig'
import Routes from './routes'
import { StatusBar } from 'react-native'

// import { Container } from './styles';

export default class Projeto extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
        <Routes />

      </>
    )

  }
}
