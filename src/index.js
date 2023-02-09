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

function decode(expr) {
    let str = '';
    for (k=0; k < expr.length; k += 10){
        let sign = expr.substr(k, 10);
        if (sign === '**********'){
            str = str + ' ';
        } else {
            let code = '';
            for (i=0; i < sign.length; i += 2){
        
                if (sign.substr(i, 2) == '10'){
                    code = code + '.' ;
                } else if (sign.substr(i, 2) == '11'){
                    code = code + '-' ;
                }
            }
            str = str + MORSE_TABLE[code];
            
        }
    }
    return str;
}

module.exports = {
    decode
}