import P5 from 'p5';
import {
  COLORS,
} from '../../constants';

const sketch = ( p5 ) => {
  
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(COLORS.BLACK);    
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};


new P5(
  sketch, 
  window.document.getElementById('sketch1'), // Allows multiple sketches to be defined on one page
);
