import { COLORS } from "../../constants";


let RollingText = function({
    color = COLORS.WHITE,
    padding = 10,
    pos,
    strokeWeight = 2,
    text, 
    textSize = 30,
}) {
    this.color = color;
    this.pos = pos;
    this.strokeWeight = strokeWeight;
    this.chars = (" ".repeat(padding) + text + " ".repeat(padding)).split('');
    this.textSize = textSize;
}

RollingText.prototype.update = function() {
    let first = this.chars.shift();
    this.chars.push(first);
}

RollingText.prototype.draw = function(p5){

    const text = this.chars.join('');

    p5.fill(this.color);
    p5.strokeWeight(this.strokeWeight);
    p5.textSize(this.textSize);

    p5.text(text, this.pos.x, this.pos.y);
}

RollingText.prototype.run = function(p5) {
    this.update();
    this.draw(p5);
}

export default RollingText;
