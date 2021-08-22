const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SPACE = '**********';
const LETTER_LENGTH = 10;
const SYMBOL_LENGTH = 2;
const MORSE_NUMS = {
    '00' : '',
    '10' : '.',
    '11' : '-',
};

function decode(expr) {
    const exprArr = expr.split(SPACE);
    const exprArrDecoded = exprArr.map((word) => {
        let decodedWord = '';
        for (let i = 0; i < word.length; i+= LETTER_LENGTH) {
            const symbol = word.substring(i, i + LETTER_LENGTH);
            let decodedSymbol = ''
            for (let j = 0; j < symbol.length; j += SYMBOL_LENGTH) {
                decodedSymbol += MORSE_NUMS[symbol.substring(j, j + SYMBOL_LENGTH)];
            }
            decodedWord += MORSE_TABLE[decodedSymbol];
        }
        return decodedWord;
    });
    return exprArrDecoded.join(' ');
}

module.exports = {
    decode
}