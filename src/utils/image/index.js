import math from '../math';


function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
}

const blur = (img) => {
    img.loadPixels();
    let x, y;

    for (y = 0; y < img.height; y++) {
        for (x = 0; x < img.width; x++) {
            let red = math.getRandomInt(0, 256);
            let green = math.getRandomInt(0, 256);
            let blue = math.getRandomInt(0, 256);
            let alpha = 255;
            writeColor(img, x, y, red, green, blue, alpha);
        }
    }
    return img;
}

export default {
    blur,
};
