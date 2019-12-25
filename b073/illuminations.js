process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', line => {
  lines.push(line);
});

// lines処理
function lines_to_input(lines) {
  let treeNumbers, lightLimits, treeLights;
  const checkLines = [];
  for (let i = 0; i < lines.length; i++) {
    const inputs = lines[i].split('\n')[0].split(' ');
    if (i === 0) {
      treeNumbers = inputs[0];
      lightLimits = inputs[1];
    } else if (i === 1) {
      treeLights = inputs;
    } else if (i === 2) {
      continue;
    } else {
      checkLines.push(inputs);
    }
  }
  const inputs = {};
  inputs.treeNumbers = treeNumbers;
  inputs.lightLimits = lightLimits;
  inputs.treeLights = treeLights;
  inputs.checkLines = checkLines;
  return inputs;
}
function illumination_set_lights(
  treeNumbers,
  lightLimits,
  treeLights,
  checkLines
) {
  for (let i = 0; i < checkLines.length; i++) {
    let startTree = checkLines[i][0] - 1;
    let endTree = checkLines[i][1] - 1;
    let checkTrees = checkLines[i][1] - checkLines[i][0] + 1;
    // 平均値出す
    let lightsSum = 0;
    for (let j = startTree; j < endTree + 1; j++) {
      lightsSum = Number(treeLights[j]) + lightsSum;
    }
    let averageLights = lightsSum / checkTrees;
    // 限界超えるなら足す
    if (averageLights < lightLimits) {
      let plusLights = Math.floor(lightLimits - averageLights) + 1;
      for (let k = startTree; k < endTree + 1; k++) {
        treeLights[k] = Number(treeLights[k]) + plusLights;
      }
    }
  }
  str = treeLights.join(' ');
  console.log(str);
}

reader.on('close', () => {
  const inputs = lines_to_input(lines);
  illumination_set_lights(
    inputs.treeNumbers,
    inputs.lightLimits,
    inputs.treeLights,
    inputs.checkLines
  );
});
