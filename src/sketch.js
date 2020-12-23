import p5 from 'p5';
import constants from './constants';

const s = ( sketch ) => {
  let width = sketch.windowWidth;
  let height = sketch.windowHeight;

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background(30);
    sketch.fill(200);
    sketch.rect(x,y,50,50);
  };

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }
};

let myp5 = new p5(s);