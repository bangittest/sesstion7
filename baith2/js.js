<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Calculator</title>
    <link rel="stylesheet" href="cs.css" />
</head>

<body>
    <div class="calculator">
        <input type="text" id="display" readonly />
        <table>
            <tr>
                <td><button onclick="clearDisplay()">C</button></td>
                <td><button onclick="backspace()">CE</button></td>
                <td><button onclick="insertOperator('/')">÷</button></td>
                <td><button onclick="insertOperator('*')">x</button></td>
            </tr>
            <tr>
                <td><button onclick="insertNumber('7')">7</button></td>
                <td><button onclick="insertNumber('8')">8</button></td>
                <td><button onclick="insertNumber('9')">9</button></td>
                <td><button onclick="insertOperator('-')">-</button></td>
            </tr>
            <tr>
                <td><button onclick="insertNumber('4')">4</button></td>
                <td><button onclick="insertNumber('5')">5</button></td>
                <td><button onclick="insertNumber('6')">6</button></td>
                <td><button onclick="insertOperator('+')">+</button></td>
            </tr>
            <tr>
                <td><button onclick="insertNumber('1')">1</button></td>
                <td><button onclick="insertNumber('2')">2</button></td>
                <td><button onclick="insertNumber('3')">3</button></td>
                <td rowspan="2"><button onclick="calculate()">=</button></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="insertNumber('0')">0</button></td>
                <td><button onclick="insertNumber('.')">.</button></td>
            </tr>
        </table>
    </div>
    <script src="js.js"></script>
</body>

</html>}

<
/html>/ /
let width = 20
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

// let dolal = prompt(`Enter the Dolal`)
// console.log(dolal)
// let change = (dolal * 23000);
// console.log(change);
// document.write(`so tien cua ban la :  (change) vnd `)


let a = +prompt(`Enter the a`);
console.log(a);
let b = +prompt(`Enter the b`);
console.log(b);
let c = +prompt(`Enter the c`);
console.log(c);
let delta = b * b - 4 * a * c;
console.log(delta);
if (delta > 0) {
    document.write(`phuong trinh co 2 nghiem:x1=${(-b + delta) / (2 * a)} x2=${(-b - delta) / (2 * a)}`);
} else if (delta = 0) {
    document.write(`Phuong trinh co nghiem kep : x1=x2 ${-b / (2 * a)}`);
} else {
    document.write(`phuong trinh vo nghiem`);
}