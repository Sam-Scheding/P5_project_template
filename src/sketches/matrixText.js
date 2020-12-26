import text from '../utils/text';
import math from '../utils/math';
import { COLORS } from '../constants';

// A simple Particle class
let TextStream = function({pos, len}) {

    this.position = pos.copy();
    this.charPos = 0;
    this.chars = [];
    this.offset = math.getRandomInt(0, 100);
    this.maxLen = len;
};

TextStream.prototype.run = function(p5) {
    this.update();
    this.display(p5);
};

// Method to update position
TextStream.prototype.update = function(){
    this.chars[this.charPos] = {
        char: text.randomCharacter(['KATAKANA', 'UPPERCASE', 'NUMBERS']),
        opacity: 255,
        color: COLORS.WHITE,
    };
    this.charPos++;
    if(this.charPos >= this.maxLen){
        this.charPos = 0;
        this.offset = math.getRandomInt(0, 100);
        this.maxLen = 10 + this.offset;
    }

    let idx = this.charPos-1;
    while(idx > 0){
        idx--;
        this.chars[idx].opacity -= 7;
        this.chars[idx].color = COLORS.GREEN;
    }
}

// Method to display
TextStream.prototype.display = function(p5) {
    p5.strokeWeight(2);
    let offset = this.offset;

    for(let idx in this.chars){
        p5.fill(...this.chars[idx].color, this.chars[idx].opacity);
        p5.text(this.chars[idx].char, this.position.x, this.position.y + offset);
        offset += 13;
    }
};


let MatrixText = function({startPos, numLines, lineLength}) {
    this.origin = startPos.copy();
    this.textStreams = [];
    let x = 0;

    while(x < numLines){
        let pos = this.origin.copy().add(x * 13, 0);
        this.addTextStream({pos, len: lineLength});
        x++;
    }

};

MatrixText.prototype.addTextStream = function({pos, len}) {
    this.textStreams.push(new TextStream({pos, len}));
};

MatrixText.prototype.run = function(p5) {
    for (let i = this.textStreams.length-1; i >= 0; i--) {
        let textStream = this.textStreams[i];
        textStream.run(p5);
    }
};
  
export {
    MatrixText,
}

