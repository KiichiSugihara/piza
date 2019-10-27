process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});

function leet_trans(text){
    const leet ={
        "A":	'4',
        "E":	'3',
        "G":	'6',
        "I":	'1',
        "O":	'0',
        "S":	'5',
        "Z":	'2'
    }
    let text_array = text.split('')
    for (let i = 0; i < text_array.length; i++){
        if (leet[text_array[i]]){
            let insert =text_array[i]
            text_array.splice(i,1,leet[insert])
        }
    }
    return String(text_array.join(''))
}


reader.on('close', () => {
  console.log(leet_trans(lines[0]));
});
