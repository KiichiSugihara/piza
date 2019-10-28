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
function isPurfectNum(natureNum){
    let sum =1;
    for (let i =2; i <= natureNum/2; i++){
        if ((natureNum % i)===0){
            sum =sum +i;
        }
    }
    let isNumType=''
    if (Number(natureNum) ===Number(sum) ){
        isNumType = 'perfect'
    } else if(Math.abs(natureNum - sum) ===1) {
        isNumType= 'nearly'
    }else{
        isNumType='neither'
    }

    return isNumType
}

reader.on('close', () => {
    for (let i =1; i< lines.length; i++){
       console.log(isPurfectNum(lines[i]));
    }
});
