// function showMessage() {
//     // alert('Xin chao');
//     document.getElementById('messageDiv').innerHTML = 'Xin chao!';
// }
// const colorize = (...args) => ({
//     black: `\x1b[30m${args.join(' ')}`,
//     red: `\x1b[31m${args.join(' ')}`,
//     green: `\x1b[32m${args.join(' ')}`,
//     yellow: `\x1b[33m${args.join(' ')}`,
//     blue: `\x1b[34m${args.join(' ')}`,
//     magenta: `\x1b[35m${args.join(' ')}`,
//     cyan: `\x1b[36m${args.join(' ')}`,
//     white: `\x1b[37m${args.join(' ')}`,
//     bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
//     bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
//     bgGreen: `\x1b[42m${args.join('')}\x1b[0m`,
//     bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
//     bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
//     bgMagenta: `\x1b[45m${args.join('')}\x1b[0m`,
//     bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
//     bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
// });
// console.log(colorize('Flipped', 'Classroom').red);
// console.log(colorize('Learning Bootcamp', JSON.stringify({
//     opened: '8:00',
//     closed: '17:30'
// })).bgCyan);
// console.log(colorize(colorize('Web fullstack').green,
//     colorize('Developer').magenta).bgWhite);
// let f = 20.5
// let b = true
// let s = 'Hà Nội'

// document.write('i = ' + i)
// document.write('<br/>')
// document.write('f = ' + f)
// document.write('<br/>')
// document.write('b = ' + b)
// document.write('<br/>')
// document.write('s = ' + s)
// let width = 20
// let height = 10
// let area = width * height
// document.write('Area = ' + area)
// let inputWidth;
// let inputHeight;
// inputWidth = prompt("Enter the width");
// inputHeight = prompt("Enter the height");
// let width = parseInt(inputWidth);
// let height = parseInt(inputHeight);
// let area = width * height;
// document.write("The area is: " + area);
// let Math = prompt(`Enter the Math`);
// console.log(Math);
// let Physics = prompt(`Enter the Physics`);
// console.log(Physics);
// let Chemistry = prompt(`Enter the Chemistry`);
// console.log(Chemistry);
// let Average = (Math + Physics + Chemistry) / 3;
// console.log(Average);
// document.write(`diem trung binh cua ba mon:` + Average);

let dolal = prompt(`Enter the Dolal`)
console.log(dolal)
let change = (dolal * 23000);
console.log(change);
document.write(`so tien cua ban la vnd :` + change)