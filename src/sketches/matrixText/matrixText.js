import P5 from 'p5';
import TextStream from '../../components/textStream';

let MatrixText = function({startPos }) {

    let p5 = new P5();
    
    this.origin = startPos.copy();
    this.textStreams = [];
    this.charWidth = 20;
    this.charHeight = 20;
    this.numLines = p5.windowWidth / this.charWidth;
    this.lineLength = p5.windowHeight / this.charHeight;

    let x = 0;
    while(x < this.numLines){
        let pos = this.origin.copy().add(x * this.charWidth, 0);
        this.addTextStream({pos, len: this.lineLength});
        x++;
    }

};

MatrixText.prototype.addTextStream = function({pos, len}) {
    this.textStreams.push(new TextStream({pos, len}));
};

MatrixText.prototype.update = function() {

    for (let i = this.textStreams.length-1; i >= 0; i--) {
        let textStream = this.textStreams[i];
        textStream.update();
    }    
}

MatrixText.prototype.display = function(p5) {
    for (let i = this.textStreams.length-1; i >= 0; i--) {
        let textStream = this.textStreams[i];
        textStream.display(p5);
    }    
}

MatrixText.prototype.run = function(p5) {

    this.update();
    this.display(p5);
};
  
export default MatrixText;
