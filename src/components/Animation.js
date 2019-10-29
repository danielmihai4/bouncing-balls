import React from 'react';
import Canvas from './Canvas';

export class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 0 };
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
  
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    updateAnimationState() {
      this.setState(prevState => ({ value: prevState.value + 1 }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
  
    render() {
      return <Canvas />;
    }
  }

export default Animation;