import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import { setMouseXCoordinate, setMouseYCoordinate, addBall } from '../actions/actions';
import { CANVAS_HEIGHT, CANVAS_WIDTH, MAX_SPEED } from './Constants';

export class PureCanvas extends React.Component {
    
    shouldComponentUpdate = () => {
      return false;
    }

    onAddBall = () => {
        this.props.addBall({
          id: uuid(),
          xCoordinate: this.props.mouseXCoordinate, 
          yCoordinate: this.props.mouseYCoordinate, 
          xVelocity: Math.floor(Math.random() * MAX_SPEED) + 1,
          yVelocity: - (Math.floor(Math.random() * MAX_SPEED) + 1)
        });
    }

    onMouseMove = (event) => {
      var bounds = event.target.getBoundingClientRect();
      var x = event.clientX - bounds.left;
      var y = event.clientY - bounds.top;

      this.props.setMouseXCoordinate(x);
      this.props.setMouseYCoordinate(y);
    };
  
    render() {
      return (
        <canvas
          width = {CANVAS_HEIGHT}
          height = {CANVAS_WIDTH}
          onClick = {this.onAddBall}
          onMouseMove = {this.onMouseMove}
          ref={node => node ? this.props.contextRef(node.getContext('2d')) : null}
        />
      );
    }
  }

const mapStateToProps = (state) => ({
    mouseXCoordinate: state.mouseCoordinates.xCoordinate, 
    mouseYCoordinate: state.mouseCoordinates.yCoordinate
});

const mapDispatchToProps = (dispatch) => ({
    setMouseXCoordinate: (xCoordinate) => dispatch(setMouseXCoordinate(xCoordinate)),
    setMouseYCoordinate: (yCoordinate) => dispatch(setMouseYCoordinate(yCoordinate)),
    addBall: (ball) => dispatch(addBall(ball))
});

export default connect(mapStateToProps, mapDispatchToProps)(PureCanvas);