import math from './math';

const CHAR_LIST = {
    ASCII: ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    KATAKANA: 'ぬふあうえおやゆよわほへたていすかんなにらぜ゜むちとしはきくまのりれけつさそひこみもねるめ',
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    NUMBERS: '0123456789',
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}


/**
 * Generates a single random ASCII character
 * 
 * @param {Array} charLists The characters to use.
 * 
 * @returns {String} A randomly generated String of characters
 */
const randomCharacter = (charLists = ['UPPERCASE', 'NUMBERS']) => {

    // Get desired characters from array of character lists
    const chars = charLists.map(list => CHAR_LIST[list]).join('');
    return chars[math.getRandomInt(0, chars.length - 1)];
};

/**
 * Generates a string of random ASCII characters
 * 
 * @param {Number} len      The number of random characters to generate
 * @param {Array} charLists The characters to use.
 * 
 * @returns {String} A randomly generated String of characters
 */
const randomString = (len, charLists = ['UPPERCASE', 'NUMBERS']) => {

    // Get desired characters from array of character lists
    const chars = charLists.map(list => CHAR_LIST[list]).join('');
    let string = []; // joining an array is faster than appending to a string apparently
    let x = 0;
    // Generate 'len' number of random characters
    while (x < len) {
        let randomChar = chars[math.getRandomInt(0, chars.length - 1)];
        string.push(randomChar);
        x++;
    }

    return string.join('');
};


export default {
    randomCharacter,
    randomString,
}