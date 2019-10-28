import React from 'react';
import { connect } from 'react-redux';
import PureCanvas from './PureCanvas';
import { BALL_COLOR, CANVAS_HEIGHT, CANVAS_WIDTH, RADIUS, GRAVITY, DAMPING, TRACTION } from './Constants';
import { removeBall } from '../actions/actions';

class Canvas extends React.Component {
  
  constructor(props) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  componentDidUpdate = () => {
    this.drawAxis();
    this.drawBalls();    
  }

  drawAxis = () => {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, height);
    this.ctx.lineTo(width, height);
    this.ctx.stroke();    
    this.ctx.restore();
  }

  drawBalls = () => {
    if (this.props.balls.length === 0) {
      return;
    }

    this.ctx.moveTo(0,0);
    this.props.balls.forEach((ball) => {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(ball.xCoordinate, ball.yCoordinate, RADIUS, 0, 2 * Math.PI, false);      
      this.ctx.fillStyle = BALL_COLOR;
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();      

      this.updateCoordinates(ball);      
    });
  }

  updateCoordinates = (ball) => {
    if (ball.xCoordinate + RADIUS >= CANVAS_WIDTH) {
      this.props.removeBall(ball.id);
      return;
    } else if (ball.xCoordinate - RADIUS <= 0) {
      ball.xVelocity = -ball.xVelocity * DAMPING;
      ball.xCoordinate = RADIUS;
    }

    if (ball.yCoordinate + RADIUS >= CANVAS_HEIGHT) {
      ball.yVelocity = -ball.yVelocity * DAMPING;
      ball.yCoordinate = CANVAS_HEIGHT - RADIUS;
      ball.xVelocity *= TRACTION;
    } else if (ball.yCoordinate - RADIUS <= 0) {
      ball.yVelocity = -ball.yVelocity * DAMPING;
      ball.yCoordinate = RADIUS;
    }
  
    ball.yVelocity += GRAVITY;
    ball.xCoordinate += ball.xVelocity;
    ball.yCoordinate += ball.yVelocity;
  }

  render() {
    return <PureCanvas contextRef={this.saveContext} />;
  }
}

const mapStateToProps = (state, props) => ({
  balls: state.balls 
});

const mapDispatchToProps = (dispatch, props) => ({
  removeBall: (id) => dispatch(removeBall(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Canvas);