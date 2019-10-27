// TODO:修正
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

function pythagoras_hypo(bottom,height){
    return Math.sqrt(Math.pow(bottom,2) + Math.pow(height,2) );
}

function how_many_is_int(bottom,height){
    let how_many = 0;
    // bottom down
    for (let b = bottom; b>0; b--){
        for (let h = height; h>0; h--){
            if (h===b){
                continue;
            }
            // Is hypo Int?
              let is_Int = Number.isInteger(pythagoras_hypo(b,h))
              if (is_Int){
                  how_many++;
              }
        }
    }
    return how_many
}

function space_text_to_array(tex){
    let inputs = tex.split(/\s/);
    return inputs
}

reader.on('close', () => {
    let inputs = space_text_to_array(lines[0]);
  console.log(how_many_is_int(Number(inputs[0]),Number(inputs[1])))
});
