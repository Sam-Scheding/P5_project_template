import P5 from 'p5';
import BarsAndTone from './barsAndTone';

const sketch = ( p5 ) => {
  let bat;
  
  p5.preload = () => {
    bat = new BarsAndTone(p5); // Preloads the image
  }

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameRate(24);
  };

  p5.draw = () => {
    bat.run(p5);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};


new P5(
  sketch, 
  window.document.getElementById('sketch1'), // Allows multiple sketches to be defined on one page
);
