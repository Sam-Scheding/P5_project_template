import RollingText from '../../components/rollingText';
import image from '../../utils/image';

let BarsAndTone = function(p5) {
    this.img = p5.loadImage(require('./images/tv_test_pattern_no_text.jpg'));
    this.rollingTextTop = new RollingText({
        text: "Vegas", 
        padding: 11,
        pos: p5.createVector(p5.windowWidth / 2 - 140, 130),
    });
    this.rollingTextBottom = new RollingText({
        text: "Starting Soon", 
        padding: 13,
        pos: p5.createVector(p5.windowWidth / 2 - 200, 765),
    });    
}

BarsAndTone.prototype.run = function(p5) {
    this.img.resize(p5.windowWidth, p5.windowHeight);
    const blurred = image.blur(this.img);
    p5.image(blurred, 0, 0);
    this.rollingTextTop.run(p5);
    this.rollingTextBottom.run(p5);
    
}

export default BarsAndTone;

