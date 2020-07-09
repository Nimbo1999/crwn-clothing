import React, { Component } from 'react'

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor(props){
    super(props);

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png' />
          <ErrorImageText>
            Algo deu errado, tente novamente mais tarde!
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;

  }

}

export default ErrorBoundary;