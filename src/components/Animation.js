import React from 'react';
import Canvas from './Canvas';

export class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
  
    componentDidMount = () => {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    updateAnimationState = () => {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    componentWillUnmount = () => {
      cancelAnimationFrame(this.rAF);
    }
  
    render() {
      return <Canvas />;
    }
  }

export default Animation;