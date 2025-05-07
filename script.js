console.log('Hello!');

// function Matrix3(n) {
//   let output = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = n; j >= 0; j--) {
//       row += i == j * j ? 'A' : ' ';
//       //j+ '' + i + ' ';
//     }

//     output = output + row + '\n';
//   }
//   return output;
// }
// console.log(Matrix3(15), 'lower half left');
// const mat3 = Matrix3(15);
//=============================

//lower half right side

// let path = [
//   60, 61, 62, 63, 64, 65, 56, 46, 36, 26, 16, 6, 7, 8, 18, 28, 38, 48, 58, 69,
//   610, 611, 612, 613, 614, 714, 814, 813, 812, 811, 810, 89, 98, 108, 119, 128,
//   138, 148, 147, 146, 136, 126, 116, 96, 95, 94, 93, 92, 91, 90, 80, 70,
// ];

// let Emoji = mat.replace(/60 /g, '😊 ');
// let consoleOutput = document.getElementById('console');
// consoleOutput.innerHTML = Emoji;

// let btn=document.getElementById("btn").addEventListener('click',function(){
//   let move=Emoji+1;
//   return move;

// })

// function movement() {
//   // let surface = '🌲';
//   let res = [];
//   for (let i = 0; i < path.length; i++) {
//     res = path[i];
//     console.log(res);
//   }
// }
// movement();

//====================================

//===============================================
// function quadrant2(n) {
//   let output = [];
//   for (let i = n; i >= 0; i--) {
//     let row = [];
//     for (let j = n; j >= 0; j--) {
//       row += i == (j * j) / 16 ? 'A' : '*  ';
//       // j + '' + i + ' ';
//     }

//     output = output + row + '\n';
//   }
//   return output;
// }
// console.log(quadrant2(30), 'upper half left');
//======================================
function quadrant1(n) {
  let output = [];
  for (let i = n; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row += j + '' + i + ' ';
      //i == (j * j) / 16 ? 'A' : '*  ';
    }

    output = output + row + '\n';
  }
  return output;
}
console.log(quadrant1(15), 'upper-half right');
// let combine2Quad = quadrant2(30).concat(quadrant1(30));
// console.log(combine2Quad);

// const mat = combine2Quad;
// let consoleOutput = document.getElementById('console');
// consoleOutput.innerHTML = mat;

//====================================

// function combine2Quad(n) {
//   let q1 = quadrant1(n);
//   let q2 = quadrant2(n);
//   let res = [];
//   for (let i = 0; i < q1.length; i++) {
//     let r = [];
//     for (let j = 0; j < q2.length; j++) {
//       r += q1[i] + '' + q2[i] + ' ';
//     }
//     res += r + '\n';
//   }
//   return res;
// }
// console.log(combine2Quad(30));

//=========================================
// function quadrant3(n) {
//   let output = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = -n; j <= 0; j++) {
//       row += i == (j * j) / 16 ? 'A' : '  ';
//       //j + '' + i + ' ';
//     }
//     output += row + '\n';
//   }
//   console.log(output, 'lower half left');
//   return output;
// }
// console.log(quadrant3(30));

//===================================
// function quadrant4(n) {
//   let output = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       row += i == (j * j) / 16 ? 'A' : '  ';
//       // i + '' + j + ' ';
//     }
//     output = output + row + '\n';
//   }
//   return output;
// }
// console.log(quadrant4(30), 'lower half right');
