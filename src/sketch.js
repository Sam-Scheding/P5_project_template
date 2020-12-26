import P5 from 'p5';
import { MatrixText } from './sketches/matrixText';
import {
  COLORS,
} from './constants';

const sketch = ( p5 ) => {
  let matrixText;
  
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    matrixText = new MatrixText({
      startPos: p5.createVector(0, 0),
      numLines: p5.windowWidth / 13,
      lineLength: p5.windowHeight / 13,
    });

  };

  p5.draw = () => {
    p5.background(COLORS.BLACK);
    matrixText.run(p5);
    
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};


new P5(
  sketch, 
  window.document.getElementById('sketch1'), // Allows multiple sketches to be defined on one page
);
