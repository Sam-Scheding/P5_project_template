import P5 from 'p5';
import text from './utils/text';
import {
  BACKGROUND_COLOR,
} from './constants';

const sketch = ( p5 ) => {

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(BACKGROUND_COLOR);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};


new P5(
  sketch, 
  window.document.getElementById('sketch1'), // Allows multiple sketches to be defined on one page
);
